"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SupabaseAuthContext } from '@/providers/SupabaseAuthProvider'
import React, { useContext, useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {signIn} = useContext(SupabaseAuthContext)
  return (
    <form>
      <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='mt-2' />
      <Button onClick={signIn}>Login</Button>
    </form>
  )
}

export default LoginPage