import type { ThemeConfig } from '../types';
import { defaultTheme, applyTheme } from './theme';
import { supabase } from './supabase';

const THEME_STORAGE_KEY = 'chosen.theme.draft';
const THEME_PUBLISHED_KEY = 'chosen.theme.published';

export type ThemeDraft = {
  id: string;
  name: string;
  isDirty: boolean;
  theme: ThemeConfig;
  updatedAt: string;
};

export function getInitialTheme(): ThemeConfig {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);

  if (saved) {
    try {
      return JSON.parse(saved) as ThemeConfig;
    } catch {
      localStorage.removeItem(THEME_STORAGE_KEY);
    }
  }

  const published = localStorage.getItem(THEME_PUBLISHED_KEY);
  if (published) {
    try {
      return JSON.parse(published) as ThemeConfig;
    } catch {
      localStorage.removeItem(THEME_PUBLISHED_KEY);
    }
  }

  return defaultTheme;
}

export function saveDraftTheme(theme: ThemeConfig) {
  localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
  applyTheme(theme);
  return true;
}

export function publishTheme(theme: ThemeConfig) {
  localStorage.setItem(THEME_PUBLISHED_KEY, JSON.stringify(theme));
  localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
  applyTheme(theme);

  if (supabase) {
    return supabase.from('themes').upsert({
      name: 'published',
      is_published: true,
      status: 'published',
      theme_json: theme,
      updated_at: new Date().toISOString(),
    });
  }

  return Promise.resolve({ data: null, error: null });
}

export function restorePublishedTheme() {
  const published = localStorage.getItem(THEME_PUBLISHED_KEY);
  if (!published) {
    return defaultTheme;
  }

  try {
    return JSON.parse(published) as ThemeConfig;
  } catch {
    return defaultTheme;
  }
}

export function resetThemeToDefault() {
  localStorage.removeItem(THEME_STORAGE_KEY);
  localStorage.setItem(THEME_PUBLISHED_KEY, JSON.stringify(defaultTheme));
  applyTheme(defaultTheme);
  return defaultTheme;
}
