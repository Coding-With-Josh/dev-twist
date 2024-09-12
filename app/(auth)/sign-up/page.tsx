"use client"

import { Button } from '@/components/ui/button'
// import Link from "next/link"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export const description =
//   "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

// const LoginForm = () => {
//   return (
//     <Card className="mx-auto max-w-sm">
//       <CardHeader>
//         <CardTitle className="text-2xl">Login</CardTitle>
//         <CardDescription>
//           Enter your email below to login to your account
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="grid gap-4">
//           <div className="grid gap-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="m@example.com"
//               required
//             />
//           </div>
//           <div className="grid gap-2">
//             <div className="flex items-center">
//               <Label htmlFor="password">Password</Label>
//               <Link href="#" className="ml-auto inline-block text-sm underline">
//                 Forgot your password?
//               </Link>
//             </div>
//             <Input id="password" type="password" required />
//           </div>
//           <Button type="submit" className="w-full">
//             Login
//           </Button>
//           <Button variant="outline" className="w-full">
//             Login with Google
//           </Button>
//         </div>
//         <div className="mt-4 text-center text-sm">
//           Don&apos;t have an account?{" "}
//           <Link href="#" className="underline">
//             Sign up
//           </Link>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// export default LoginForm

import { Input } from '@/components/ui/input'
import { SupabaseAuthContext } from '@/providers/SupabaseAuthProvider'
import React, { useContext, useState } from 'react'

const SignUpPage = () => {
  const context = useContext(SupabaseAuthContext);
  if (!context) {
    throw new Error('SupabaseAuthContext is not provided');
  }
  const { signup } = context;  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <form>
      <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='mt-2' />
      <Button onClick={() => signup(email, password)}>SignUp</Button>    </form>
  )
}

export default SignUpPage