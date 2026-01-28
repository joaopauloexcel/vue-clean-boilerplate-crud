import type { MenuItem } from './menu.types'

export const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: 'mdi-view-dashboard'
  },
  {
    label: 'Ponto de Venda',
    to: '/pvd',
    icon: 'mdi-point-of-sale'
  },
  {
    label: 'Produtos',
    to: '/products',
    icon: 'mdi-package-variant'
  },
  {
    label: 'Clientes',
    to: '/clients',
    icon: 'mdi-account-group'
  },
  {
    label: 'Ajuda',
    to: '/help',
    icon: 'mdi-help-circle-outline'
  }
]
