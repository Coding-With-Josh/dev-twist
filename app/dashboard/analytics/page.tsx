'use client';


import { useRouter } from 'next/navigation';
import Sidebar from '@/components/dashboard/blocks/sidebar';
import Navbar from '@/components/dashboard/blocks/navbar';
import { Charts } from '@/components/dashboard/content/charts';

const Analytics = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Navbar />
        <span className="header font-bold text-3xl p-8">Analytics</span>
        <Charts />
      </div>
    </div>
  );
};

export default Analytics;
