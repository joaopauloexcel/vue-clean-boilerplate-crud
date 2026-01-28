import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases as mdiAliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases as svgAliases, mdi as mdiSvg, } from 'vuetify/iconsets/mdi-svg'


export const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light',
    },
    icons: {
        defaultSet: 'mdi',
        aliases: {
            ...mdiAliases,
            ...svgAliases,
        },
        sets: {
            mdi,
            'mdi-svg': mdiSvg
        }
    }
})