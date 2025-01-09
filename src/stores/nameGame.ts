import { ref, computed } from "vue";
import { defineStore } from "pinia";

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  headshot: {
    url: string;
    type: string;
  };
}

export const useNameGameStore = defineStore("nameGame", () => {
  const winCount = ref(0);
  const answerCount = ref(0);
  const questionStartTime = ref(0);
  const elapsedTime = ref(0);
  const answered = (correct = false) => {
    if (correct) {
      winCount.value++;
    }
    answerCount.value++;
    elapsedTime.value = Date.now() - questionStartTime.value;
  };

  const employees = ref<Employee[]>([]);
  const shuffled = ref<Employee[]>([]);
  fetch("https://namegame.willowtreeapps.com/api/v1.0/profiles")
    .then((response) => response.json())
    .then((data) => {
      employees.value = data;
    })
    .catch((error) => {
      console.error("Error fetching employees:", error);
    });

  const startNewGame = () => {
    shuffled.value = employees.value.slice().sort(() => Math.random() - 0.5);
    winCount.value = 0;
    answerCount.value = 0;
    elapsedTime.value = 0;
  };

  const getOptions = (numEmployees = 6) => {
    questionStartTime.value = Date.now();
    return shuffled.value.splice(0, numEmployees); //starting at index 0 removes 6 elements not removing elements from indices 0 to 6
  };

  const displayedEmployees = computed(() => getOptions());
  const randomIndex = Math.floor(Math.random() * displayedEmployees.value.length);
  const correctEmployee = computed(() => displayedEmployees.value[randomIndex]);

  return {
    winCount,
    answered,
    answerCount,
    elapsedTime,
    getOptions,
    startNewGame,
    correctEmployee,
    displayedEmployees,
  };
});
