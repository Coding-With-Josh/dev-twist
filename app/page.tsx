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
import {
  FollowingPointerDemo,
  TitleComponent,
} from '@/components/reusable/pointer';
import ShimmerBtn from '@/components/reusable/shimmer-btn';
import { Feature } from '@/components/sections/feature';
import { Hero } from '@/components/sections/hero';
import { Button } from '@/components/ui/button';
import {
  FollowerPointerCard,
  FollowPointer,
} from '@/components/ui/following-pointer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spotlight } from '@/components/ui/spotlight';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from '@/components/ui/typewriter-effect';
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcut';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [isVisible, setVisible] = useState(false);
  useKeyboardShortcut(['alt', 'p'], () => setVisible(true));
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
    <>
      <Navbar />
      <FollowerPointerCard
        className="overflow-hidden"
        title={
          <TitleComponent
            title="You"
            avatar={require('@/assets/images/profile.jpg')}
          />
        }
      >
        <div className=" flex items-center flex-col relative w-full h-screen bg-black">
          <Hero />
          {isVisible ? (
            <FollowerPointerCard
              className="absolute z-[5000] backdrop-blur-md w-screen h-screen flex items-center justify-center"
              title={
                <TitleComponent
                  title="You"
                  avatar={require('@/assets/images/profile.jpg')}
                />
              }
            >
              <div className="">
                <div>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        defaultValue="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <Button onClick={() => setVisible(false)}>Hide</Button>
                </div>
              </div>
            </FollowerPointerCard>
          ) : (
            <></>
          )}
          {/* <Feature/> */}
        </div>
      </FollowerPointerCard>
    </>
  );
}
