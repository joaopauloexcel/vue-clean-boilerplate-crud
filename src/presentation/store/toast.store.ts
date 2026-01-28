import { defineStore } from 'pinia'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastState {
    show: boolean
    message: string
    type: ToastType
    timeout: number
}

export const useToastStore = defineStore('toast', {
    state: (): ToastState => ({
        show: false,
        message: '',
        type: 'info',
        timeout: 3000
    }),

    actions: {
        open(message: string, type: ToastType = 'info', timeout = 3000) {
            this.message = message
            this.type = type
            this.timeout = timeout
            this.show = true
        },

        success(message: string) {
            this.open(message, 'success')
        },

        error(message: string) {
            this.open(message, 'error')
        },

        warning(message: string) {
            this.open(message, 'warning')
        },

        info(message: string) {
            this.open(message, 'info')
        },

        close() {
            this.show = false
        }
    }
})
