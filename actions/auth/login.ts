'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { prisma } from '@/utils/prisma/client'

type FormData = {
  email: string
  password: string
}

export async function login({email, password}: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: email,
    password: password,
  }

  const { error } = await supabase.auth.signInWithPassword(data)
  

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup({email, password}: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: email,
    password: password,
  }
  alert(data)

  const { error } = await supabase.auth.signUp(data)
  prisma.user.create({
    data: {
      email: email,
      password: password
    },
  })

  if (error) {
    redirect('/error')
    alert('errrorr')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
