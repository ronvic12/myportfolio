"use client";


import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
    const pathname = usePathname();
  return  <AnimatePresence mode="wait">
  {/* Background fade animation */}
  {/*Need better animation later */}
  <motion.div
    key={pathname}
    initial={{ opacity: 1 }}
    animate={{
      opacity: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30,
        duration: 1, // You can adjust duration as needed
      }
    }}
    exit={{ opacity: 0 }}
    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
  />
    {children}

</AnimatePresence>
}

export default PageTransition