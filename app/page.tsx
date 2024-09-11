import Navbar from "@/components/navbar";
import SplineScene from "@/components/reusable/spline";
import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      <SplineScene/>
      <Button onClick={redirect('/sign-up')}>SignUp</Button>
    </div>
    
  );
}