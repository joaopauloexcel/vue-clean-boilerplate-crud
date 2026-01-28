<script setup lang="ts">
import { useToastStore } from '@/presentation/store';

const toast = useToastStore()

const colors = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'primary'
}
</script>

<template>
  <v-snackbar
    v-model="toast.show"
    :color="colors[toast.type]"
    :timeout="toast.timeout"
    location="top right"
  >
    {{ toast.message }}

    <template #actions>
      <v-btn
        variant="text"
        @click="toast.close"
      >
        Fechar
      </v-btn>
    </template>
  </v-snackbar>
</template>
