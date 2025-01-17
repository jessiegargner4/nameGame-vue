<script setup lang="ts">
import { ref } from "vue";
import NavBar from "./NavBar.vue";
import { useNameGameStore } from "@/stores/nameGame";

const store = useNameGameStore();


store.getOptions();
</script>

<template>
  <div class="container">
    <NavBar />
    <h1>Try matching the WillowTree employee to their photo.</h1>
    <h2>
      {{ store.correctEmployee.firstName }} {{ store.correctEmployee.lastName }}
    </h2>
    <div class="game-container">
      <div
        class="pic-container"
        v-for="(employee, index) in store.displayedEmployees"
        :key="employee.id"
        :class="{
          correct:  store.selected[index] && employee.id === store.correctEmployee.id,
          incorrect: store.selected[index] && employee.id !== store.correctEmployee.id,
          inactive: !store.selected[index] && store.selected.some(s => s)
        }"
      >
        <img
          :src="employee.headshot.url"
          @click="store.handleSelected(employee, index)"
          alt="employee photo"
        />
      </div>
    </div>
    <button
      :disabled="store.isButtonDisabled"
      :style="{ color: store.isDisabled ? '#808080' : '#ffffff' }"
      class="button"
      v-if="store.answerCount < 5"
      @click="store.getOptions()"
    >
      Continue
    </button>
    <router-link to="/EndGamePage" class="button" v-if="store.answerCount >= 5"
      >Continue</router-link
    >
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
  position: relative; /*cursor */
}

.pic-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.inactive {
  opacity: 0.5;
}

.correct::after { /*cursor */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 255, 0, 0.3);
  background-image: url('@/assets/check.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100px;
}

.incorrect::after { /*cursor */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 0, 0, 0.3);
  background-image: url('@/assets/x.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100px;
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
