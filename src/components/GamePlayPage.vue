<script setup lang="ts">
import NavBar from './NavBar.vue';
import { useNameGameStore } from '@/stores/nameGame';

const store = useNameGameStore();

defineProps<{
 
}>()

//now in store.
// const displayedEmployees = store.getOptions();
// const randomIndex = Math.floor(Math.random() * displayedEmployees.length); 
// const correctEmployee = displayedEmployees[randomIndex];

</script>

<template>

  <div class="container">
    <NavBar/>
    <h1>Try matching the WillowTree employee to their photo.</h1>
    <h2>
       {{store.correctEmployee.firstName}} {{store.correctEmployee.lastName}}
    </h2>
    <div class="game-container">
        <div class="pic-container" v-for="shuffled in store.displayedEmployees" :key="shuffled.id">
                <img :src="shuffled.headshot.url" alt="employee photo" />   
            </div>
    </div>
    <button class="button">Continue</button>
    <!-- <Link to="/EndGamePage" class="button">Continue</Link> -->
  </div>
</template>

<style scoped>


.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  height: 100vh; 
  width: 100vw;
  background-color: #ffffff;
}

.game-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  padding: 20px; 
  box-sizing: border-box; 
  max-height: calc(100vh - 200px); 
  overflow-y: auto;
}

.pic-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
}

.pic-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
h1 {
    font: helvetica;
    color: #223547;
    font-weight: 400;
    size: 24px;
    line-height: 32px;
}

h2 {
    font: helvetica;
    color: #223547;
    font-weight: 700;
    line-height: 48px;
    font-size: 40px;
    margin-top: 20px;
}

</style>