'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PanelLeft, Search } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/dashboard/blocks/sidebar';
import Navbar from '@/components/dashboard/blocks/navbar';
import BreadCrumbs from '@/components/dashboard/blocks/breadcrumb';

type Pages = {
  pageOne: string;
  pageTwo: string;
  pageThree?: string;
  pageFour?: string;
  pageFive?: string;
};

const Settings = ({
  pageOne,
  pageTwo,
  pageThree,
  pageFour,
  pageFive,
}: Pages) => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <Navbar />
            </SheetContent>
          </Sheet>
          <BreadCrumbs />
          <div className="relative ml-auto flex-1 items-center md:grow-0">
            <Search className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          
        </header>
      </div>
    </div>
  );
};

export default Settings;
