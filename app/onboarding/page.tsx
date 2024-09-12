'use client';


import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  MoreVertical,
  Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Separator } from "@/components/ui/separator"
import { useState } from "react";
import { redirect } from "next/navigation";

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Welcome to our app!',
      description: 'This is the first step of our onboarding process.',
    },
    {
      title: 'Create your account',
      description: 'This is the second step of our onboarding process.',
    },
    {
      title: 'Set up your profile',
      description: 'This is the third step of our onboarding process.',
    },
  ];

  return (
    <div className="flex w-screen h-screen">
      

    <Card className="overflow-hidden ml-8 my-auto p-2 h-fit">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Order Oe31b70H
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Copy className="h-3 w-3" />
              <span className="sr-only">Copy Order ID</span>
            </Button>
          </CardTitle>
          <CardDescription>Date: November 23, 2023</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <Truck className="h-3.5 w-3.5" />
            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
              Track Order
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" className="h-8 w-8">
                <MoreVertical className="h-3.5 w-3.5" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Trash</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Updated <time dateTime="2023-11-23">November 23, 2023</time>
        </div>
        <Pagination className="ml-auto mr-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronLeft className="h-3.5 w-3.5" />
                <span className="sr-only">Previous Order</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="sr-only">Next Order</span>
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
    <div className='flex items-center justify-center w-screen h-screen bg-background'>
      <div className="p-12 max-w-md mx-auto border-2 bg-card border-accent rounded-lg shadow-md">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`w-full text-center ${
                activeStep === index ? 'text-primary' : 'text-gray-500'
              }`}
            >
              <div
                className={`h-2 w-2 mx-auto rounded-full ${
                  activeStep === index ? 'bg-primary' : 'bg-gray-500'
                }`}
              />
              <p className="text-lg">{step.title}</p>
            </div>
          ))}
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-lg">{steps[activeStep].description}</p>
        </div>
        <div className="flex justify-between mt-4">
          {activeStep > 0 && (
            <Button
            variant={'secondary'}
              // className="bg-primary text-white font-bold py-2 px-4 rounded"
              onClick={() => setActiveStep(activeStep - 1)}
            >
              <ChevronLeft size={17}/>
              Previous
            </Button>
          )}
          {activeStep < steps.length - 1 && (
            <Button
            variant={'secondary'}
              // className="bg-primary text-white font-bold py-2 px-4 rounded"
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Next
              <ChevronRight size={17}/>
            </Button>
          )}
          {activeStep < steps.length  && (
            <Button
            variant={'primary'}
              // className="bg-primary text-white font-bold py-2 px-4 rounded"
              onClick={redirect('/dashboard')}
            >
              Continue
            </Button>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Onboarding;
