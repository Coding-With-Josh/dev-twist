"use client"

// app/providers/SupabaseAuthProvider.tsx
import { supabase } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import { createContext, useState, useEffect, ReactNode } from 'react';

export const SupabaseAuthContext = createContext({
  user: null as User | null,  session: null,
  isLoading: true,
  signIn: ({ email, password }: any) => {},
    signOut: () => {},
    signUp: ({ email, password }: any) => {},});

export function SupabaseAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);;
  const [isLoading, setIsLoading] = useState(true);



  const signIn = async ({email, password}: any) => {
    try {
      const { data: auth } = await supabase.auth.signInWithPassword({ email, password });
      setUser(auth.user);
      redirect('/dashboard');
    } catch (error) {
      // Handle sign-in errors
      alert("Invalid email or password");
      console.error(error);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const signUp = async ({ email, password }: any) => {
  try {
    const { data: auth } = await supabase.auth.signUp({ email, password });
    setUser(auth.user);
  } catch (error) {
    // Handle sign-up errors
    console.error(error);
  }
};

return (
  <SupabaseAuthContext.Provider value={{ user, session: null, isLoading, signIn, signOut, signUp }}>
    {children}
  </SupabaseAuthContext.Provider>
);
}