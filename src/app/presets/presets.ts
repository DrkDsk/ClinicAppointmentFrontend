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
        success: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        error: {
          50: '#FDECEC',
          100: '#F9BDBD',
          200: '#F68C8C',
          300: '#F15B5B',
          400: '#EC2A2A',
          500: '#E63946', // rojo médico
          600: '#CC2F3C',
          700: '#B32630',
          800: '#971C25',
          900: '#7B111A',
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
        success: {
          50: '#DCFCE7',
          100: '#BBF7D0',
          200: '#86EFAC',
          300: '#4ADE80',
          400: '#22C55E',
          500: '#16A34A',
          600: '#15803D',
          700: '#166534',
          800: '#14532D',
          900: '#052E16',
        },
        error: {
          50: '#FEE2E2',
          100: '#FECACA',
          200: '#FCA5A5',
          300: '#F87171',
          400: '#EF4444',
          500: '#DC2626',
          600: '#B91C1C',
          700: '#991B1B',
          800: '#7F1D1D',
          900: '#450A0A',
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
