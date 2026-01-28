<script setup lang="ts">
import { menuItems } from './menu.config'
</script>

<template>
  <v-navigation-drawer
    permanent
    width="260"
    class="sidebar"
  >
    <v-list nav dense>
      <v-list-item
        v-for="item in menuItems"
        :key="item.label"
        :to="item.to"
        link
        router
        class="menu-item"
      >
        <template #prepend>
          <v-icon :icon="item.icon" size="20" />
        </template>

        <v-list-item-title>
          {{ item.label }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.sidebar {
  background-color: #2e2e2e;
  color: white;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}

.menu-item {
  border-radius: 8px;
  margin-bottom: 8px;
}

.menu-item:hover {
  background-color: #9e9e9e;
}
</style>
