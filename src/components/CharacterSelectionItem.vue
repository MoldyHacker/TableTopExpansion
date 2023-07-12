<script>
import {defineComponent} from 'vue'
import DnD5eCharacter from "src/models/DnD5eCharacter";
import {useCharacterStore} from "stores/character-store";

export default defineComponent({
  name: "CharacterSelectionItem",
  props: ['characterObj'],
  data() {
    return {
      character: new DnD5eCharacter(),
      characterStore: useCharacterStore(),
      cardGameLabel: '',
      cardBg: {},
    }
  },
  methods: {
    favoriteToggle() {
      this.characterStore.toggleCharacterVariable(this.characterObj, "favorite")
    },
    deleteCharacter() {
      this.$emit('deleteCharacter', this.characterObj)
      // this.characterStore.deleteCharacter(this.characterObj.id);
    },
    selectCharacter() {
      if (this.characterStore.activeCharacter !== this.characterObj)
        this.characterStore.activateCharacter(this.characterObj.id)
      this.$router.push({name: 'character', params: {id: this.characterObj.id}})
    },
    updateCharacter() {
      if (this.characterStore.activeCharacter !== this.characterObj)
        this.characterStore.activateCharacter(this.characterObj.id)
      this.$router.push({name: 'dnd5e-settings', params: {id: this.characterObj.id}})
    },
    setCardLabel(gameLabel) {this.cardGameLabel = gameLabel},
    setCardBg(gameBg) {this.cardBg = gameBg},
  },
  computed: {

  },
  created() {
    switch (this.characterObj.gameType){
      case 'DnD5e':
        this.setCardLabel('D & D - 5e');
        this.setCardBg({backgroundImage: 'radial-gradient(circle, #d70114 0%, #75010c 100%)'})
        break;
      default:
        this.setCardLabel('No Game Name');
        this.setCardBg({backgroundImage: 'radial-gradient(circle, #35a2ff 0%, #014a88 100%)'})
    }
  }
})
</script>

<template>
  <q-card class="card" bordered dark flat square>
    <q-card-section horizontal style="height: 196px; width: 375px">
      <div class="full-width cardBg relative-position" :style="[cardBg]">
        <div class="q-px-md q-gutter-md q-mt-none">
          <div class="gameType text-h5 z-top text-bold">{{ cardGameLabel }}</div>
          <div class="ellipsis-3-lines">
            <div class="text-h5">{{ characterObj.name }}</div>
            <div class="text-subtitle2">
              <span v-show="characterObj.classData.totalLevel">Level {{ characterObj.classData.totalLevel }} | </span>
              <span v-show="characterObj.race"> {{ characterObj.race }} | </span>
              <span v-show="characterObj.classData.classString">{{ characterObj.classData.classString }}</span>
            </div>
          </div>
        </div>
        <div v-if="characterObj.campaignName" class="absolute-bottom text-h6 ellipsis campaignBg q-pl-md">Campaign: <em><strong>{{ characterObj.campaignName }}</strong></em></div>
      </div>
      <q-card-actions class="justify-around q-px-md bg-grey" vertical>
        <q-btn v-if="characterObj.isCreated" color="primary" flat icon="visibility" round @click="selectCharacter">
          <q-tooltip anchor="center right" self="center left">View</q-tooltip>
        </q-btn>
        <q-btn :icon="characterObj.favorite ? 'bookmark' : 'bookmark_outline'" color="amber" flat round @click="favoriteToggle()">
          <q-tooltip anchor="center right" self="center left" >Bookmark</q-tooltip>
        </q-btn>
        <q-btn color="black" flat icon="settings" round @click="updateCharacter">
          <q-tooltip anchor="center right" self="center left">Settings</q-tooltip>
        </q-btn>
        <q-btn color="red" flat icon="delete" round @click="deleteCharacter">
          <q-tooltip anchor="center right" self="center left">Delete</q-tooltip>
        </q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.card {
  width: 375px;
  max-width: 375px;
  height: 196px;
  max-height: 196px;
}
.campaignBg {
  background-color: black;
}

.cardBg {
  //background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
  //background: radial-gradient(circle, #d70114 0%, #75010c 100%);
  //background-image: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
}
</style>
