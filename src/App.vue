<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

import { Header, Menu, Toast } from './presentation/components/ui';

const route = useRoute()
const showLayout = computed(() => !route.meta.public)
</script>

<template>
  <v-app>
    <v-layout>
      <Menu v-if="showLayout" />

      <v-main>
        <Header 
          v-if="showLayout" 
          style="position: fixed;"
        />
        <router-view class="mt-2" />
        <VueQueryDevtools :initial-is-open="true" />
      </v-main>
    </v-layout>
    <Toast />
  </v-app>
</template>