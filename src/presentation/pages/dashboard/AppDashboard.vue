<template>
  <div class="dashboard">
    <h1>Olá</h1>
    <p>Esse é o dashboard</p>

    <RouterLink to="/products">
      Atalho para produtos
    </RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.dashboard{
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
