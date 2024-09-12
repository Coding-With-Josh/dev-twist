'use client'

import { createContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface SupabaseAuthContext {
  children: React.ReactNode
  user: any | null;
  session: any | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
}

const SupabaseAuthContext = createContext<SupabaseAuthContext | null>(null);


const SupabaseAuthProvider: React.FC<SupabaseAuthContext> = ({ children }) => { 
   const [user, setUser] = useState<any | null>(null);
  const [session, setSession] = useState<any | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error(error);
      } else {
        setUser(data);
      }
    };
    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
    } else {
      setUser(data);
    }
  };

  const signup = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error(error);
    } else {
      setUser(data);
    }
  };

  const signout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <SupabaseAuthContext.Provider value={{ children, user, session, login, signup, signout }}>
      {children}
    </SupabaseAuthContext.Provider>
  );
};

export { SupabaseAuthProvider, SupabaseAuthContext };