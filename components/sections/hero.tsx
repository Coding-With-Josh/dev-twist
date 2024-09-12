import React from 'react';
import { cn } from '@/lib/utils';
import { Spotlight } from '../ui/spotlight';
import ShimmerBtn from '../reusable/shimmer-btn';
import { Button } from '../ui/moving-border';
import { Box, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col items-center p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <Button className="px-4 bg-black/20 backdrop-blur-md py-2 flex items-center justify-center space-x-2 hover:bg-black/50 ease-in">
          <Box size={16} />
          <span>Introducing Twist For Developers</span>
          <ChevronRight size={17} />
        </Button>
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Developer Automation <br /> all in one platform.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mb-8">
          Work smart... not hard. Project management, kanban features, emails,
          todos, real-time collaboration, video conferencing, all in one app.
        </p>
        <ShimmerBtn>Get Started</ShimmerBtn>
      </div>
    </div>
  );
}
