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
import AddSomething from '@/components/dashboard/blocks/add-something-block';

const Customers = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Navbar />
        <span className='header font-bold text-3xl p-8'>Customers</span>
        <AddSomething title='New Customer' content='Add a new customer to your customer list' linkText='Add Customer' linkUrl='/dashboard/customers/add'/>
      </div>
    </div>
  );
};

export default Customers;
