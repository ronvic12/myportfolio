"use client";


import {Sheet,SheetContent,SheetTrigger} from '@/components/ui/sheet'

import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {CiMenuFries} from 'react-icons/ci';
const links = [
    {
     name:"Home",
     path:"/",
    },
    {
     name:"Resume",
     path:"/myResume",
    },
    {
      name:"My Projects",
      path:"/myProjects",
    }
]
const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className='text-[32px] text-[var(--textaccent)]'/>
        </SheetTrigger>
        <SheetContent className= "flex flex-col">
        {/* logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                <h1 className='text-4xl font-semibold'>
                    Ronvic<span className='text-[var(--textaccent)]'>.</span>
                </h1>
                </Link>
            </div>
        <nav className ="flex flex-col justify-center items-center gap-8">
            {links.map((link,index)=>{
                return(
                    <Link 
                    href={link.path}
                    key={index}
                    className={`${link.path === pathname && "text-[var(--textaccent)] border-b-2"}
                    text-xl capitalize hover:text-[var(--textaccent)] transition-all`}    
                    >
                    {link.name}
                    </Link>
                );
            })}
            <a href="mailto:ronviccuevas@gmail.com">
                        <Button>Hire Me</Button>
            </a>
        </nav>
     
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav