import { useEffect } from 'react';
import { applyTheme } from './theme';
import { defaultTheme } from './theme';

export function initializeTheme() {
  const theme = localStorage.getItem('chosen.theme.published');
  const next = theme ? JSON.parse(theme) : defaultTheme;
  applyTheme(next);
}

export function useThemeInitializer() {
  useEffect(() => {
    initializeTheme();
  }, []);
}
