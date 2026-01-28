<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

import { env } from '@/config'
import { useAuthStore } from '@/presentation/store'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

onMounted(() => {
  email.value = env.userNameMock;
  password.value = env.userPasswordMock;
})

const handleLogin = async () => {
  error.value = ''
  loading.value = true

  try {
    const { data } = await axios.post(
      `${env.apiBaseUrl}/auth/login`,
      {
        username: 'emilys',
        password: 'emilyspass',
      },
    )
    
    const token = data?.accessToken
    authStore.setAuth(token)
    router.push('/')
  } catch (err: any) {
    error.value =
      err?.response?.data?.error ?? 'Erro ao fazer login'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card width="420" class="pa-6">
      <div class="text-center mb-4">
        <strong>LOGO</strong>
      </div>

      <v-card-title class="text-center font-weight-bold pb-4">
        Acesso ao sistema
      </v-card-title>

      <v-form @submit.prevent="handleLogin">
        <v-text-field
          v-model="email"
          label="Usuário ou Email"
          variant="outlined"
          class="mb-4"
        />

        <v-text-field
          v-model="password"
          label="Senha"
          type="password"
          variant="outlined"
          class="mb-4"
        />

        <v-alert
          v-if="error"
          type="error"
          variant="text"
          class="mb-3"
        >
          {{ error }}
        </v-alert>

        <v-btn
          type="submit"
          color="#2e2e2e"
          size="large"
          block
          :loading="loading"
        >
          ENTRAR
        </v-btn>
      </v-form>

      <div class="text-center mt-3">
        <v-btn variant="text" size="small">
          Esqueceu sua senha?
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>
