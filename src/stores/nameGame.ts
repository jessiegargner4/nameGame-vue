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
  const isDisabled = ref(true);
  const answered = (correct = false) => {
    if (correct) {
      winCount.value++;
    }
    answerCount.value++;
    elapsedTime.value = Date.now() - questionStartTime.value;
  };

  const winRate = computed(() => {
    console.log(winRate);
    return answerCount.value === 0 ? 0 : winCount.value / answerCount.value * 100;
  });
  
  const failRate = computed(() => {
    console.log(failRate);
    return answerCount.value === 0 ? 0 : (answerCount.value - winCount.value) / answerCount.value * 100;
  });

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

  const displayedEmployees = ref<Employee[]>([]);
  const getOptions = (numEmployees = 6) => {
    questionStartTime.value = Date.now();
    displayedEmployees.value = shuffled.value.splice(0, numEmployees);
  };

  const correctEmployee = computed(() => {
    return displayedEmployees.value[Math.floor(Math.random() * displayedEmployees.value.length)];
  });

  const selected = ref<boolean[]>([false, false, false, false, false, false]);
    const handleSelected = (employee: Employee, index: number) => {
      if (!selected.value.some(select => select)) {
        selected.value[index] = true;
        selected.value = [...selected.value];
        // isDisabled.value = false;
      }
      if (correctEmployee.value.id === employee.id) {
        answered(true);
      } else {
        answered(false);
      }
      // isDisabled.value = true;
      return selected.value; // && isDisabled.value;
    };

    const isButtonDisabled = computed(() => {
      if(selected.value.some(select => select)) {
        
        return isDisabled.value = false;
      }
      console.log(isDisabled);
      return isDisabled.value = true;
    });


  return {
    winCount,
    answered,
    answerCount,
    elapsedTime,
    getOptions,
    startNewGame,
    correctEmployee,
    // chosenEmployee,
    handleSelected,
    displayedEmployees,
    isButtonDisabled,
    isDisabled,
    winRate,
    failRate,
    selected,
  };
});