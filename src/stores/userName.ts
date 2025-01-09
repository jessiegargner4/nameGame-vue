import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserNameStore = defineStore("userName", () => {
    // const useName = () => {
    const name = ref("");
    const isValid = computed(() => name.value.trim().length >= 3);

    const setName = (newName: string) => {
      name.value = newName;
      console.log("Name changed to", newName);
    }
    return { name, isValid, setName };
//   };
});
