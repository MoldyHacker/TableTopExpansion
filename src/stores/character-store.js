import { defineStore } from "pinia"
import { db, storage } from "boot/firebase";
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import Character from "src/models/Character";
import {useUserStore} from "stores/user-store";

/*
 * Character Store: Manages the state and actions related to character data, such as creating, updating, and retrieving character information.
 */

export const useCharacterStore = defineStore('character', {
  state: () => ({
    activeCharacter: {},
    allCharacters: [],
  }),

  actions: {
    // TODO: this function appears unused, potentially removable
    // characterById(characterId) {
    //   // db.doc(`users/${useAuthStore().authUser.uid}/characters/${characterId}`)
    //   db.doc(`characters/${characterId}`)
    //     .get()
    //     .then((doc) => {
    //       console.log(doc.id, '=>', doc.data())
    //     })
    // },

    async activateCharacter(characterId) {
      const docRef = doc(db, `characters/${characterId}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // this.activeCharacter = new Character(docSnap.id, docSnap.data());
        const tempCharacter = new Character(docSnap.id, docSnap.data());
        if (!tempCharacter.isPublic && tempCharacter.userId === useUserStore().authUser.uid) {
          this.activeCharacter = tempCharacter;
        } else if (tempCharacter.isPublic) {
          this.activeCharacter = tempCharacter;
        } else {
          this.activeCharacter = {permission: false}
        }
      } else {
        console.log('No such document!');
      }
    },

    async getUserCharacters() {
      this.allCharacters = [];

      /// Get all characters for the user from the main collection of characters
      const q = query(collection(db, "characters"), where("userId", "==", useUserStore().authUser.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        this.allCharacters.push(new Character(doc.id, doc.data()));
      });

      /// Get all characters for the user from the user's subcollection of characters
      // const q2 = await getDocs(collection(db, `users/${useUserStore().authUser.uid}/characters/`));
      // q2.forEach((doc) => {
      //   console.log(doc.id, '=>', doc.data());
      //   this.allCharacters.push(new Character(doc.id, doc.data()));
      // });
    },

    getCharacters() {
      this.allCharacters = [];
      db
        // .collection(`users/${useAuthStore().authUser.uid}/characters/`)
        .collection(`characters/`)
        .onSnapshot((querySnapshot) => {
          this.allCharacters.length = 0;
          querySnapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          this.allCharacters.push(new Character(doc.id, doc.data()));
        })
      })
      //   .catch((error) => {
      //   console.error('Error retrieving collection from firestore', error);
      // })
      // console.log('array of characters', this.allCharacters);
    },

    addCharacter(characterObj) {
      let characterId = '';
      db
        // .collection(`users/${useAuthStore().authUser.uid}/characters/`)
        .collection(`characters/`)
        .add(characterObj)
        .then((docRef) => {
          console.log('Character written with ID of: ', docRef.id);
          characterId = docRef.id;
          this.activateCharacter(characterId)
          // this.getCharacters();
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
      })
      return characterId;
    },

    deleteCharacter(characterId) {
      db
        // .collection(`users/${useAuthStore().authUser.uid}/characters/`)
        .collection(`characters/`)
        .doc(characterId)
        .delete()
        .then(() => {
          console.log('Character deleted');
          this.getUserCharacters();
        }).catch((error) => {
          console.error('Error removing character', error);
      })
    },

    importCharacter(characterId, data) {
      db.doc(`characters/${characterId}`).set(data)
        .then(() => {
          console.log(`Character: ${characterId} imported with data ${data}`);
        })
        .catch((error) => {
          console.error("Error writing document", error);
        })
    },

    //TODO: make update and toggle both use the characterId instead of the whole object

    updateCharacterVariable(characterId, variable, data) {
      // let characterId;
      // if (character.id !== null)
      //   characterId = character.id
      // else
      //   characterId = character
      db
        // .doc(`users/${useAuthStore().authUser.uid}/characters/${characterId}`)
        .doc(`characters/${characterId}`)
        .update({
          [variable]: data
        })
        .then(() => console.log(`Character: ${characterId} document updated variable: ${variable}, with data: ${data}`))
        .catch((error) => console.error(`Error updating ${variable}, with data: ${data}`, error))
    },

    toggleCharacterVariable(character, variable) {
      let fieldValue = character[variable]
      console.log('filedValue',fieldValue)
      db
        // .doc(`users/${useAuthStore().authUser.uid}/characters/${character.id}`)
        .doc(`characters/${character.id}`)
        .update({
          [variable]: !fieldValue,
        })
        .then(() => console.log(`Character: ${character.name}, fieldValue updated: ${variable}, to: ${!fieldValue}`))
        .catch((error) => console.error(`Error toggling ${variable} in document`, error))
    },

    uploadCharacterAvatar(characterId, file) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);

      fileRef.put(file)
        .then(snapshot => {
          // Get the download URL
          snapshot.ref.getDownloadURL()
            .then(downloadURL => {
              db.doc(`characters/${characterId}`).update({avatarURL: downloadURL});
            });
        })
      // return avatarURL;
    },


  },

  getters: {
    isCreated(state) {
      // Character is created enough to be viewable.
      return !!state.activeCharacter.race && !!state.activeCharacter.classData && !!state.activeCharacter.abilityScores;
    },
    isUserCharacter(state) {
      // Active character is the property of the logged-in user.
      return state.activeCharacter.userId === useUserStore().authUser.uid
    },
    hasCharacters(state) {
      return state.allCharacters.length > 0
    }
  }
})
