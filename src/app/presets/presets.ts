import { definePreset } from '@primeuix/themes';
import Nora from '@primeuix/themes/nora';

export const CustomPreset = definePreset(Nora, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '#e7e9f8',
          100: '#c4c8ee',
          200: '#a0a6e3',
          300: '#7c84d9',
          400: '#636ccB', // tu color base
          500: '#50589C', // color principal
          600: '#3C467B', // primario oscuro
          700: '#323c6d',
          800: '#2b345e',
          900: '#22284b',
        },
        text: {
          color: '#1c1c28',
          secondary: '#4b4b62'
        },
      },
      dark: {
        primary: {
          50: '#e7e9f8',
          100: '#c4c8ee',
          200: '#a0a6e3',
          300: '#7c84d9',
          400: '#636ccB',
          500: '#6E8CFB', // más brillante en dark mode
          600: '#50589C',
          700: '#3C467B',
          800: '#2f3563',
          900: '#23274d',
        },
        text: {
          color: '#e0e0f0',
          secondary: '#b0b0cc'
        },
      },
    },
  },
});
