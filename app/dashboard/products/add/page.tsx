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
import BlockOfContent from '@/components/dashboard/blocks/block-of-content';
import Test from '@/components/dashboard/content/test';

const AddProduct = () => {
  const router = useRouter();
  // const supabase = createClient()

  // const { data, error } = await supabase.auth.getUser()
  // if (error || !data?.user) {
  //   redirect('/login')
  // }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Navbar/>
        <span className='header font-bold text-xl md:text-2xl lg:text-2xl xl:text-3xl p-8'>Dashboard</span>
        <Test/>
      </div>
    </div>
  );
};

export default AddProduct;
