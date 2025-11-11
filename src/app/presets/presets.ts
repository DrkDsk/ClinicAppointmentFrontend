import {definePreset} from '@primeuix/themes';
import Nora from '@primeuix/themes/nora';

export const CustomPreset = definePreset(Nora, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
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
          50:  '#f3f6fb',  // casi blanco, sutil tono azul
          100: '#e6edf8',  // fondo muy suave
          200: '#c8d6ef',  // borde o fondo elevado
          300: '#a8bfe5',  // hover o componente neutro
          400: '#7f9cd1',  // botón secundario o highlight leve
          500: '#4563a6',  // color base, igual que el modo oscuro
          600: '#3d5897',  // acento principal (hover activo)
          700: '#344a81',  // elementos activos o títulos secundarios
          800: '#2b3b68',  // títulos o bordes fuertes
          900: '#1e2a4b',
        },
        text: {
          color: '#1e2a4b',      // Texto principal — casi negro con un toque azul
          secondary: '#344a81',  // Texto secundario — gris azulado, más suave
          error: '#de5959'       // Rojo de error — visible pero no chillón
        },
      },
      dark: {
        primary: {
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
          0:   '#0C1224', // casi negro con tinte azul
          50:  '#121A33',
          100: '#1A2547',
          200: '#22305C',
          300: '#2B3B72',
          400: '#35478A',
          500: '#3F54A0', // base media (similar a #4563A6)
          600: '#5B72C0',
          700: '#768FDD',
          800: '#9BB0F3',
          900: '#C4D1FF',
        },
        text: {
          color: '#e6edf8',      // Texto principal — casi blanco, legible
          secondary: '#a8bfe5',  // Texto secundario — gris azulado suave
          error: '#ef5350'       // Rojo claro de error — destaca sin romper el esquema
        },
      },
    },
  },
});
