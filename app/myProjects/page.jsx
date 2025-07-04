"use client";

import { motion } from "framer-motion";
import React,{useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

import {BsArrowUpRight,BsGithub} from "react-icons/bs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";


import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import Link from "next/link";
import Image from "next/image";

import { projects } from '../../components/data/resume';

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index

    setProject(projects[currentIndex]);
  }
  return (
    <motion.section 
    initial={{opacity:0}} 
    animate={{opacity:1, transition:{delay:2.4,duration:0.4,ease:'easeIn'}}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*Outline number*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-white text-outline">
                {project.num}
              </div>
              {/*Project Title*/}
              <h2 className="text-[42px] font-bold leading-none text-white 
              group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>

              {/*Project description*/}
              <p className="text-white/60">{project.description}</p>

              {/*Stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item,index)=>{
                  return (
                  <li key={index} className="text-xl text-[var(--textaccent)]">
                    {item.name}
                    {/*Remove last command*/}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
                })}
              </ul>
              {/*Border*/}
              <div className="border border-white/20"></div>
               {/*Buttons*/}
              <div className="flex items-center gap-4">
                {/*Live Project Button*/}
                  {project.live && (
                      <Link href={project.live}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                            bg-white/5 flex justify-center items-center">
                              <BsArrowUpRight className="text-white text-3xl group-hover:text-[var(--textaccent)]" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live Project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                              

                {/*Github Project Button*/}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                      bg-white/5 flex justify-center items-center">
                        <BsGithub className="text-white text-3xl group-hover:text-[var(--textaccent)]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project,index)=>{
                return(<SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center
                  items-center bg-pink-50/20">
                    {/*Overlay*/}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/*Image*/}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover"
                      alt=""/>
                    </div>
                  </div>
                  </SwiperSlide>
                  
                );

              })}
              {/* slider buttons */}
            <WorkSliderBtns
              containerstyles="flex gap-2 absolute top-1/2 -translate-y-1/2 right-0 xl:top-auto xl:bottom-0 xl:translate-y-0 z-50 w-full justify-between xl:w-max xl:justify-none"
              btnstyles="bg-[var(--textaccent)] hover:bg-white text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects