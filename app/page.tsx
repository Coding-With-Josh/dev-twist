// import Navbar from "@/components/navbar";
// import SplineScene from "@/components/reusable/spline";
// import { Button } from "@/components/ui/button";
// import { NavigationMenu } from "@/components/ui/navigation-menu";
// import Image from "next/image";
// import { redirect } from "next/navigation";

// export default function Home() {
//   return (
//     <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
//       <SplineScene/>
//       <Button onClick={redirect('/sign-up')}>SignUp</Button>
//     </div>
    
//   );
// }
"use client";




import { FloatingDockDemo } from '@/components/reusable/floating-dock-demo';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/ui/spotlight';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Gradient() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="px-4 flex items-center flex-col relative w-full h-screen bg-gradient-to-br from-black to-gray-800 transition-all duration-500"
      
    >
       <Spotlight
        className=""
        fill="white"
      />
      <h1 className="mt-40 mb-8 text-[3.2rem] bg-gradient-to-r from-black via-white to-gray text-center inline-block text-transparent bg-clip-text hover:text-white/20 hover:font-thin">A WHOLE NEW WORLD OF AI
        <br/>WITH TWIST
      </h1>
      <Button>
        <Link href="/sign-up">Get Started</Link>
      </Button>
      <Button variant={'secondary'} className='mt-10 flex items-center justify-center space-x-2'>
        <Link href="/login">Login</Link>
        <LogIn size={15}/>
      </Button>
      <FloatingDockDemo/>

    </div>
  );
}