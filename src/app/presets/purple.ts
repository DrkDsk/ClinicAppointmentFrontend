import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const PurplePreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#f9f9f9',   // seasalt (más claro)
            100: '#dcd9ed',  // ultra violet light
            200: '#b9b3db',
            300: '#968dc8',
            400: '#7368b6',
            500: '#574b9c',  // ultra violet base
            600: '#352d41',  // dark purple 2
            700: '#28272f',  // dim gray dark
            800: '#140d22',  // dark purple
            900: '#0b090d'   // darkest
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '#f9f9f9',   // seasalt
                    100: '#e0dee4',  // dim gray light
                    200: '#c0beca',
                    300: '#a19daf',
                    400: '#817d95',
                    500: '#635f75',  // dim gray base
                    600: '#504d5e',
                    700: '#3c3a47',
                    800: '#28272f',
                    900: '#141318'
                },
                text: {
                    color: '#140d22',         // dark purple
                    colorSecondary: '#635f75' // dim gray
                }
            },
            dark: {
                surface: {
                    0: '#000000',
                    50: '#140d22',  // dark purple
                    100: '#201c28',
                    200: '#2b2535',
                    300: '#352d41', // dark purple 2
                    400: '#504d5e',
                    500: '#635f75',
                    600: '#817d95',
                    700: '#a19daf',
                    800: '#c0beca',
                    900: '#f9f9f9'
                },
                text: {
                    color: '#f9f9f9',         // seasalt
                    colorSecondary: '#c0beca'
                }
            }
        }
    }
});

export default PurplePreset;