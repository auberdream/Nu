import { DefaultTheme } from 'styled-components'
import { darken, lighten } from 'polished'

const dustedPink = '#fff3f6'
const salmon = '#ffd1da'
const mint = '#d0ffee'
const desert = '#ffdfc8'
const washedCoral = '#ffc2c2'

const Theme: DefaultTheme = {
    palette: {
        background: {
            highlight: lighten(0.05, dustedPink),
            main: dustedPink,
            shadow: darken(0.05, dustedPink)
        },
        primary: {
            highlight: lighten(0.05, dustedPink),
            main: dustedPink,
            shadow: darken(0.05, dustedPink)
        },
        secondary: {
            highlight: lighten(0.05, salmon),
            main: salmon,
            shadow: darken(0.05, salmon)
        },
        success: {
            highlight: lighten(0.05, mint),
            main: mint,
            shadow: darken(0.05, mint)
        },
        warning: {
            highlight: lighten(0.05, desert),
            main: desert,
            shadow: darken(0.05, desert)
        },
        error: {
            highlight: lighten(0.05, washedCoral),
            main: washedCoral,
            shadow: darken(0.05, washedCoral)
        }
    }
}

export { Theme }