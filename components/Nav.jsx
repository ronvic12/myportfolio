"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
const Nav = () => {

    const pathname = usePathname(); // returns a string of Current URL's pathname so basically it reads inside the folder name of the app, this allows for users to see which URL are they in 
   console.log(pathname);
  return (
    <nav className ="flex gap-8">
      {links.map((link,index)=>{
        return <Link href={link.path} key={index} className={`${link.path === pathname && "text-[var(--textaccent)] border-b-2"

        } capitalize font-medium hover:text-[var(--textaccent)] transition-all`}>
            {link.name}</Link>
      })}
    </nav>
  )
}

export default Nav