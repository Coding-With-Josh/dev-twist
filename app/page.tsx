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
'use client';

import { Navbar } from '@/components/reusable/navbar';
import ShimmerBtn from '@/components/reusable/shimmer-btn';
import { Hero } from '@/components/sections/hero';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/ui/spotlight';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from '@/components/ui/typewriter-effect';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Gradient() {
  const [isHovering, setIsHovering] = useState(false);
  const words = [
    {
      text: 'Developer',
    },
    {
      text: 'Stress',
    },
    {
      text: 'no more',
    },
  ];

  return (
    <div className="px-4 flex items-center flex-col relative w-full h-screen bg-black">
      <Navbar />
      <Hero />
      <ShimmerBtn/>
    </div>
  );
}
