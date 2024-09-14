'use client';

import Link from 'next/link';
import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
} from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { ModeToggle } from '@/components/ui/theme-toggler';
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';

const Sidebar = () => {
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';
  const isOrders = pathname === '/dashboard/orders' ||  pathname.startsWith('/dashboard/orders/');
  const isProducts = pathname === '/dashboard/products' || pathname.startsWith('/dashboard/products/');
  const isCustomers = pathname === '/dashboard/customers' || pathname.startsWith('/dashboard/customers/');
  const isAnalytics = pathname === '/dashboard/analytics' || pathname.startsWith('/dashboard/analytics/');
  const isSettings = pathname === '/dashboard/settings' || pathname.startsWith('/dashboard/settings/');
  
  const routes = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: Home,
    },
    {
      name: 'Orders',
      href: '/orders',
      icon: ShoppingCart,
    },
    {
      name: 'Products',
      href: '/products',
      icon: Package,
    },
    {
      name: 'Customers',
      href: '/customers',
      icon: Users2,
    },
    {
      name: 'Analytics',
      href: '/analytics',
      icon: LineChart,
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: Settings,
    },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        
        <Link
          href="#"
          className="mb-4 group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <TooltipProvider>
          <Tooltip>
            {' '}
            <TooltipTrigger asChild>
              <Link
                href="/dashboard"
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${isDashboard ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground md:h-8 md:w-8`}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            {' '}
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/orders"
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${isOrders ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}  transition-colors hover:text-foreground md:h-8 md:w-8`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Orders</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Orders</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            {' '}
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/products"
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${isProducts ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground md:h-8 md:w-8`}
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">Products</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Products</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            {' '}
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/customers"
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${isCustomers ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground md:h-8 md:w-8`}
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            {' '}
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/analytics"
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${isAnalytics ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground md:h-8 md:w-8`}
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Analytics</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <Separator className="my-2" />
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            {' '}
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/settings"
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${isSettings ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground md:h-8 md:w-8`}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ModeToggle />
      </nav>
    </aside>
  );
};

export default Sidebar;
