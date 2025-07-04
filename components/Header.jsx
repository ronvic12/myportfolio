import { Button } from "@/components/ui/button";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
 const Header = () => {
  return (
   <header className = "py-8 xl:py-12">
    <div className="container mx-auto flex justify-between items-center">
    
    {/*Logo or Image here */}
        <Link href="/">
            <h1 className="text-4xl font-semibold">
            Ronvic <span className="text-[var(--textaccent)]">.</span>
            </h1>
        
        </Link>

        {/* Desktop Nav * and Contact / */}

        <div className="hidden xl:flex items-center gap-8">
        <Nav/>
       <a href="mailto:ronviccuevas@gmail.com">
    <Button>Hire Me</Button>
</a>
        </div>
        {/* Mobile Nav */}
        <div className="xl:hidden">
           <MobileNav/>
        </div>


    </div>


   </header>
  )
}
export default Header;