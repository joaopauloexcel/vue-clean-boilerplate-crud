import {
  mdiViewDashboard,
  mdiPointOfSale,
  mdiPackageVariant,
  mdiAccountGroup
} from '@mdi/js'

import type { MenuItem } from './menu.types'

export const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: ['mdi-svg', mdiViewDashboard]
  },
  {
    label: 'Ponto de Venda',
    to: '/pvd',
    icon: ['mdi-svg', mdiPointOfSale]
  },
  {
    label: 'Produtos',
    to: '/products',
    icon: ['mdi-svg', mdiPackageVariant]
  },
  {
    label: 'Clientes',
    to: '/clients',
    icon: ['mdi-svg', mdiAccountGroup]
  },
  {
    label: 'Ajuda',
    to: '/help',
    icon: 'mdi-help-circle-outline'
  }
]
