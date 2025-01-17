<script setup lang="ts">
import { useNameGameStore } from '@/stores/nameGame';
import { useUserNameStore } from '@/stores/userName';

const userNameStore = useUserNameStore();
const store = useNameGameStore();

store.getOptions();


</script>

<template>
  <div class="container">
    <div class="endScreenBlue">
      <img src="../assets/title.png" alt="Title"/>     
        <img src="../assets/endGame.svg" class="spacedImage" alt="EndGameImage"/> 
        <p class="endScreenText">Congratulations {{userNameStore.name}}, <br></br> you scored {{store.winCount}} / {{store.answerCount}}!</p>        
        <router-link class="button" to="/">Return to home </router-link>
      </div>
    
    <div class="endScreenScores">
        <p>
            {{store.winRate}}%
              <br></br>
              Correct Selections
        </p>
        <p>
            {{store.failRate}}%
            <br></br>
            Incorrect Selections
        </p>
        <p>
            {{((store.elapsedTime / 5 )/ 1000).toFixed(2)}} Sec
            <br></br>
            Avg Selection Time
        </p>
    </div>
</div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  padding: 10 20px;
  align-items: center;
}

.endScreenText {
  font-family: Helvetica;
font-size: 40px;
font-weight: 700;
line-height: 48px;
text-align: center;
color: #FFFFFF;
}

.endScreenScores {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  justify-content: space-around;
  width: 100vw;
  height: 50vh;
  font-weight: 700;
  padding: 0;
  margin: 0;
  background-color: #FFFFFF;
  color: black;
  font-family: Helvetica;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
}

.endScreenBlue {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  justify-content: space-around;
  width: 100vw;
  height: 50vh;
  padding: 0;
  margin: 0;
  background-color: #223547;
}

.spacedImage {
  margin-top: 20px; /* Adjust the value as needed */
}

</style>