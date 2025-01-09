<script setup lang="ts">
import { useUserNameStore } from '@/stores/userName';
import { ref } from 'vue';

const store = useUserNameStore();
// const localName = ref(store.name);

</script>

<template>
    <div class="modal">
        <div class="modal-content">
            <h2>Please enter you user name.</h2>
            <input 
                type="text" 
                placeholder="Enter your user name"
                :value="store.name"
                @input="store.setName(($event.target as HTMLInputElement).value)"
                />
            
        </div>
    </div>
</template>

<style scoped>

.modal {
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: color-backdrop;

  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  flex-basis: 600px;
  padding: spacing(4);
  background-color: #3e6181;
  border-radius: 8px;
  text-align: center;
  width: 350px;
}

</style>