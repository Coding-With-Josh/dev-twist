import { supabase } from "@/utils/supabase/client";

type FormData = {
  email: string
  password: string
}

async function signUpNewUser({ email, password }: FormData) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: 'https://example.com/welcome',
    },
  })
}
