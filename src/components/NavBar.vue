<script setup lang="ts">
</script>

<template>
  <nav class="navBar">
    <div class="nav-item back-arrow">
      <router-link to="/"><img src="../assets/backArrow.png" alt="Back"/></router-link>
    </div>
    <div class="nav-item title-container">
      <img src="../assets/title.png" alt="Title"/>
    </div>
  </nav>
</template>

<style scoped>

.navBar {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 100px;
  width: 100vw;
  background-color: #223547;
}

.back-arrow {
  justify-content: flex-start; 
  margin-right: auto; 
}

.title-container {
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.navBar img {
  max-height: 100%;
}
</style>
