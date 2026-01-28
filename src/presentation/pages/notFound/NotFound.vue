<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Página não encontrada</p>

    <RouterLink to="/products">Ir para produtos</RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found {
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
