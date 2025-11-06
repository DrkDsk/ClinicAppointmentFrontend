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
          0: '#FFFFFF', // fondo base - muy claro
          50: '#F8FAFC', // contenedores o secciones secundarias
          100: '#F1F5F9', // secciones elevadas o inputs
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B', // equilibrio medio (borde/texto apagado)
          600: '#475569',
          700: '#334155', // texto principal / alto contraste
          800: '#1E293B', // títulos o elementos destacados
          900: '#0F172A',
        },
        text: {
          color: '#1E293B',      // gris azulado (principal)
          secondary: '#64748B',  // gris medio (labels, placeholders),
          error: '#FCA5A5'
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
          0: '#122644',
          50: '#1E293B',
          100: '#334155',
          200: '#3E4C63',
          300: '#495871',
          400: '#566580',
          500: '#64748B',
          600: '#7C8BA0',
          700: '#9CA3AF',
          800: '#CBD5E1',
          900: '#F1F5F9',
        },
        text: {
          color: '#F1F5F9',      // blanco suave
          secondary: '#94A3B8',  // gris claro
        },
      },
    },
  },
});
