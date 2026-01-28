<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { pageTitles } from './header.config'
import { useAuthStore } from '@/presentation/store'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const title = computed(() => pageTitles[route.path] ?? 'Página')

const showBack = computed(() => route.path.split('/').length > 2)

const menuOpen = ref(false)

async function handleLogout() {
  authStore.resetState()
  router.replace('/login')
}
</script>

<template>
  <v-app-bar
    height="64"
    flat
    border
    density="comfortable"
  >
    <div class="d-flex align-center ga-3 pl-8 pr-8">
      <v-tooltip
        v-if="showBack"
        text="Voltar"
      >
        <template #activator="{ props }">
          <v-btn
            icon="mdi-arrow-left"
            v-bind="props"
            @click="router.back()"
          />
        </template>
      </v-tooltip>

      <v-toolbar-title class="font-weight-bold">
        {{ title }}
      </v-toolbar-title>
    </div>

    <v-spacer />

    <div class="d-flex align-center ga-2">
      <v-tooltip text="Ajuda">
        <template #activator="{ props }">
          <v-btn
            icon="mdi-help-circle-outline"
            v-bind="props"
          />
        </template>
      </v-tooltip>

      <v-menu
        v-model="menuOpen"
        location="bottom end"
      >
        <template #activator="{ props }">
          <v-btn
            icon
            size="small"
            v-bind="props"
            class="avatar-btn"
          >
            <v-avatar size="32">
              J
            </v-avatar>
          </v-btn>
        </template>

        <v-list density="compact">
          <v-list-item
            title="Sair"
            @click="handleLogout"
          />
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<style>
  .avatar-btn {
    width: 36px !important;
    height: 36px !important;
    min-width: 36px !important;
    padding: 0 !important;
    background-color:#787878c4 !important;
    margin-right: 8px !important;
  }
</style>
