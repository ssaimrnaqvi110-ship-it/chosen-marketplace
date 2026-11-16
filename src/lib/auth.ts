import { createClient, type User } from '@supabase/supabase-js';
import { supabase } from './supabase';

export type SessionState = {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
};

export async function getCurrentUser(): Promise<User | null> {
  const client = supabase ?? (import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY ? createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY) : null);

  if (!client) {
    return null;
  }

  const { data, error } = await client.auth.getUser();

  if (error) {
    return null;
  }

  return data.user;
}

export async function signOut() {
  const client = supabase;
  if (!client) {
    return { error: null };
  }

  const { error } = await client.auth.signOut();
  return { error };
}

export async function getSessionState(): Promise<SessionState> {
  const user = await getCurrentUser();

  return {
    user,
    loading: false,
    isAuthenticated: Boolean(user),
  };
}
