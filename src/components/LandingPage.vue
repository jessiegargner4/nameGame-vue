<script setup lang="ts">
import { useNameGameStore } from '@/stores/nameGame';
// import {useStore} from 'vuex';
import GetNameModal from './GetNameModal.vue';
import { useUserNameStore } from '@/stores/userName';

const userNameStore = useUserNameStore();
const store = useNameGameStore();

defineProps<{
  userName?: string;
}>()

</script>

<template>
  <div class="container">
    <img src="../assets/gameLogo.jpg" alt="game logo" />
    <h1>Try matching the WillowTree employee to their photo.</h1>
    <GetNameModal v-if="!userName"/>
    <router-link v-if="userNameStore.isValid" to="GamePlayPage" class="button" @click=store.startNewGame>Play!</router-link>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  place-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: #223547;
}

/* .webLanding {
  flex-direction: row;
} */

/* .mobileLanding {
  flex-direction: column;
} */

h1 {
  font-size: 1.5rem;
  font-weight: 500;
}
</style>