<template>
  <div class="header text-center q-ma-xl index text-cyan text-bold">
    Welcome!<br>
<!--    <q-img src="icons/branding-logo-small.png" width="320px"></q-img>-->
  </div>
  <q-page class="flex flex-block justify-center text-center content">
    <div v-if="authStore.authUser" class="authenticated">
      Pick up where you left off. <br>
      <div class="flex flex-center">
        <q-btn class="bg-primary text-white" @click="this.$router.push({name: 'characters'})">My Characters</q-btn>
      </div>
    </div>
    <div v-else class="notAuthenticated text-center">
      You're not logged in. 😢 <br> For the full experience we recommend that you login/signup. <br>
      <q-btn class="text-white bg-primary" @click="authStore.signInWithPopup()">Login/Signup</q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import {useUserStore} from "stores/user-store";

export default defineComponent({
  name: 'IndexPage',
  data(){
    return {
      authStore: useUserStore(),
    }
  }
})
</script>
<style scoped>
.header {
  font-size: 72px;
  @media (max-width: 600px) {
    font-size: 64px;
  }
  @media (max-width: 360px) {
    font-size: 48px;
  }
}
.content {
  font-size: 48px;
  @media (max-width: 600px) {
    font-size: 32px;
  }
  @media (max-width: 360px) {
    font-size: 24px;
  }
}
</style>
