import Navbar from '@/components/dashboard/blocks/navbar';
import Sidebar from '@/components/dashboard/blocks/sidebar';
import { DashboardContent } from '@/components/dashboard/content/test2';
import React from 'react';

const AddCustomer = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Navbar />
        <span className="header font-bold text-xl md:text-2xl lg:text-2xl xl:text-3xl p-8">
          Dashboard
        </span>
        <DashboardContent/>
      </div>
    </div>
  );
};

export default AddCustomer;
