import {definePreset} from '@primeuix/themes';
import Nora from '@primeuix/themes/nora';

export const CustomPreset = definePreset(Nora, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '#E0F2F1',
          100: '#B2DFDB',
          200: '#80CBC4',
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#2A9D8F', // color principal (turquesa)
          600: '#239E91',
          700: '#1E857B',
          800: '#16695F',
          900: '#0E4A43',
        },
        secondary: {
          50: '#E8F0FE',
          100: '#C6DBFF',
          200: '#A5C7FF',
          300: '#84B2FF',
          400: '#639DFF',
          500: '#3A86FF', // azul clínico
          600: '#2E73E0',
          700: '#265FC2',
          800: '#1E4BA4',
          900: '#173885',
        },
        surface: {
          0: '#FFFFFF',
          50: '#F8FAFC',
          100: '#F1F5F9',
        },
        text: {
          color: '#1E293B',      // gris azulado (principal)
          secondary: '#64748B',  // gris medio (labels, placeholders),
          error: '#FCA5A5'
        },
      },
      dark: {
        primary: {
          50: '#CCFBF1',
          100: '#99F6E4',
          200: '#5EEAD4',
          300: '#2DD4BF',
          400: '#14B8A6',
          500: '#0D9488', // verde menta base en oscuro
          600: '#0F766E',
          700: '#115E59',
          800: '#134E4A',
          900: '#042F2E',
        },
        secondary: {
          50: '#DBEAFE',
          100: '#BFDBFE',
          200: '#93C5FD',
          300: '#60A5FA',
          400: '#3B82F6',
          500: '#2563EB', // azul cielo
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#172554',
        },
        surface: {
          0: '#0F172A',
          50: '#1E293B',
          100: '#334155',
        },
        text: {
          color: '#F1F5F9',      // blanco suave
          secondary: '#94A3B8',  // gris claro
        },
      },
    },
  },
});
