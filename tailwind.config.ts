import type { Config } from 'tailwindcss'

export default {
    important: false,
    future: {
        hoverOnlyWhenSupported: true
    },
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',

            primary: {
                DEFAULT: '#2B5B6C',
                100: '#3F859E',
                200: '#397990',
                300: '#346E83',
                400: '#2F6477',
                500: '#2B5B6C',
                600: '#275261',
                700: '#234A57',
                800: '#20434E',
                900: '#1D3C46'
            },
            secondary: {
                DEFAULT: '#385542',
                50: '#E0EBE4',
                100: '#537C61',
                200: '#4B7158',
                300: '#446750',
                400: '#3E5E49',
                500: '#385542',
                600: '#324D3B',
                700: '#2D4535',
                800: '#293E30',
                900: '#25382B'
            },
            accent1: {
                DEFAULT: '#86A1A8',
                100: '#D7E1E3',
                200: '#C0CFD2',
                300: '#ABBEC3',
                400: '#98AFB5',
                500: '#86A1A8',
                600: '#74939B',
                700: '#66868E',
                800: '#5E7B83',
                900: '#536D73'
            },
            accent2: {
                DEFAULT: '#A48C88',
                100: '#E0D8D7',
                200: '#CFC2C0',
                300: '#BFAEAC',
                400: '#B19C99',
                500: '#A48C88',
                600: '#977C77',
                700: '#8B6F6A',
                800: '#7C635E',
                900: '#705955'
            },
            gray: {
                DEFAULT: '#D2D2BE',
                100: '#FBFBF9',
                200: '#F6F6F3',
                300: '#EBEBE3',
                400: '#DEDED0',
                500: '#D2D2BE',
                600: '#C7C7AD',
                700: '#BCBC9E',
                800: '#B2B290',
                900: '#A7A781'
            },
            'brand-black': {
                DEFAULT: '#41403A',
                100: '#959489',
                200: '#76756A',
                300: '#616057',
                400: '#4C4B44',
                500: '#41403A',
                600: '#363530',
                700: '#2D2C28',
                800: '#252521',
                900: '#1F1F1B'
            },
            success: {
                DEFAULT: '#008761',
                50: '#E6F5F0',
                100: '#CDECE2',
                200: '#ADE0CF',
                300: '#90D5BE',
                400: '#76CBAF',
                500: '#008761',
                600: '#007051',
                700: '#005D43',
                800: '#004D38',
                900: '#00402E'
            },
            warning: {
                DEFAULT: '#E8A74A',
                50: '#FDF8F1',
                100: '#F8E5C9',
                200: '#F3D2A1',
                300: '#EEC17D',
                400: '#EAB25D',
                500: '#E8A74A',
                600: '#E1901D',
                700: '#BB7818',
                800: '#9B6414',
                900: '#815311'
            },
            danger: {
                DEFAULT: '#CD465E',
                50: '#FAEDEF',
                100: '#EFC7CD',
                200: '#E5A5AF',
                300: '#DC8694',
                400: '#D46B7C',
                500: '#CD465E',
                600: '#B43148',
                700: '#95293C',
                800: '#7C2232',
                900: '#671C2A'
            },
            info: {
                DEFAULT: '#0047BA',
                50: '#DEEFF5',
                100: '#BEDFEC',
                200: '#9DCFE2',
                300: '#7FC1D9',
                400: '#64B4D1',
                500: '#0047BA',
                600: '#003B9A',
                700: '#003180',
                800: '#00296A',
                900: '#002258'
            },
            black: '#000',
            white: '#fff'
        },
    },
    mode: 'jit',
    content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.html']
} satisfies Config;