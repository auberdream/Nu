import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            background: {
                highlight: string
                main: string
                shadow: string
            },
            primary: {
                highlight: string
                main: string
                shadow: string
            }
            secondary: {
                highlight: string
                main: string
                shadow: string
            }
            success: {
                highlight: string
                main: string
                shadow: string
            }
            warning: {
                highlight: string
                main: string
                shadow: string
            }
            error: {
                highlight: string
                main: string
                shadow: string
            }
        }
    }
}