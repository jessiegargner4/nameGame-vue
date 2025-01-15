<script setup lang="ts">
import { ref } from 'vue';
import NavBar from './NavBar.vue';
import { useNameGameStore } from '@/stores/nameGame';

const store = useNameGameStore();

store.getOptions();

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
      <div 
        class="pic-container" 
        v-for="employee in store.displayedEmployees" 
        :key="employee.id"
        :class="{ correct: employee.isChosen && employee.isCorrect, incorrect: employee.isChosen && !employee.isCorrect, inactive: employee.isChosen && employee.id !== store.correctEmployee.id }"
      >
        <img :src="employee.headshot.url" @click="store.chosenEmployee(employee)" alt="employee photo" />
      </div>
    </div>
    <button class="button"v-if="store.answerCount < 5" @click="store.getOptions()">Continue</button>
    <router-link to="/EndGamePage" class="button" v-if="store.answerCount >= 5">Continue</router-link>
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

.inactive {
  opacity: 0.5;
}

.correct {
  border: 2px solid green;
}

.incorrect {
  border: 2px solid red;
  background: #ff3a3099;
  background-image: url('assets/x.png');
  background-position: center;
  background-repeat: no-repeat;
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