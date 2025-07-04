"use client";
import { useState } from "react";
import { certifications, education,experience,about } from '../../components/data/resume';
import { skills} from '../../components/data/skills';
import {Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Linkify from 'react-linkify';

const Resume = () => {
   const [selectedJob, setSelectedJob] = useState(null);

  // Open modal with selected job
  const openModal = (job) => setSelectedJob(job);
  
  // Close modal
  const closeModal = () => setSelectedJob(null);
  return <motion.div 
  initial={{opacity:0}} 
  animate={{
    opacity:1,
    transition:{delay:2.4,duration:0.4,ease:'easeIn'},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      
      <div className="container mx-auto">
        <Tabs
            defaultValue="experience" 
            className="flex flex-col xl:flex-row gap[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 
          gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/*Content */}
          <div className="min-h-[70vh] w-full">
            {/*Experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.job_experiences.map((item,index)=>{
                    return(
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10
                      flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer hover:underline text-white"
                       onClick={() => openModal(item)}
                       >
                        <span className="text-[var(--textaccent)]">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] 
                         text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-[var(--textaccent)]"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

             {/* Modal */}
            {selectedJob && (
              <div
                className="fixed inset-0 bg-black/90  flex justify-center items-center z-50"
                onClick={closeModal}
              >
                <div
                  className="bg-[#232329] p-6 rounded-md max-w-lg w-full text-white"
                  onClick={(e) => e.stopPropagation()} // prevent modal close on content click
                >
                  <button
                    className="text-white float-right text-xl font-bold"
                    onClick={closeModal}
                    aria-label="Close modal"
                  >
                    &times;
                  </button>
                  <h2 className="text-3xl font-bold mb-2">{selectedJob.position}</h2>
                  <h3 className="text-xl text-[var(--textaccent)] mb-4">{selectedJob.company}</h3>
                  <p className="mb-4">{selectedJob.duration}</p>
                  {/* Responsibility fallback */}
                    <p className="mb-4 text-white/90">
                     <Linkify>
                    {selectedJob.responsibilities || "Main responsibility not available."}
                    </Linkify>
                    
                    </p>

                    {/* Impact points fallback */}
                    {Array.isArray(selectedJob.impactPoints) && selectedJob.impactPoints.length > 0 ? (
                      <ul className="list-disc list-inside space-y-2 text-white/70">
                        {selectedJob.impactPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-white/60 italic">No additional accomplishments listed.</p>
                    )}
                </div>
              </div>
            )}

            {/*Education*/}
            <TabsContent value="education" className="w-full">
                 <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.education_items.map((item,index)=>{
                    return(
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10
                      flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-[var(--textaccent)]">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degreeField}
                        </h3>
                        <p className="text-white/60 text-sm text-center lg:text-left">
                          {item.degreeTitle}
                        </p>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-[var(--textaccent)]"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            

             {/*Skills*/}
          <TabsContent value="skills" className="w-full h-full">
          <div className="flex flex-col gap-8 px-4 py-6 max-w-6xl mx-auto">
            {/* Title and description */}
            <div className="text-center xl:text-left space-y-4">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-xl mx-auto xl:mx-0 text-white/70">{skills.description}</p>
            </div>

            {/* Scrollable container */}
            <ScrollArea className="h-[450px] pr-2">
              <ul className="space-y-10">
                {skills.skill_list.map(({ category, items }) => (
                  <li key={category} className="space-y-4">
                    <h4 className="text-2xl font-semibold">{category}</h4>

                    {/* Items container: horizontal scroll on mobile, grid on sm+ */}
                    <div
                      className="
                        flex flex-row gap-4 overflow-x-auto
                        sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-x-visible
                      "
                    >
                      {items.map(({ name, icon }) => (
                        <TooltipProvider key={name} delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div
                                className="
                                  bg-[#232329] rounded-xl flex justify-center items-center 
                                  p-5 cursor-default group min-w-[120px] flex-shrink-0
                                  transition-colors duration-300
                                  hover:bg-[var(--background-hover)]
                                "
                              >
                                <div className="text-5xl group-hover:text-[var(--textaccent)] transition-all duration-300">
                                  {icon}
                                </div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent side="top" align="center">
                              <p>{name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        </TabsContent>

             {/*Certifications*/}
              <TabsContent value="certifications" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{certifications.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {certifications.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {certifications.cert_items.map((item,index)=>{
                    return(
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10
                      flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-[var(--textaccent)]">{item.issueDate}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] 
                          text-center lg:text-left">
                            <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-white"
                            >
                            {item.certificate}
                          </a>
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-[var(--textaccent)]"></span>
                          <p className="text-white/60">{item.provider}</p>
                        </div>
                      </li>
                    );
                  })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

             {/*About*/}
             <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>

                      {/* Multiple Images */}
                    <div className="flex flex-wrap justify-center xl:justify-start gap-4">
                      {about.images.map((imgSrc, index) => (
                        <div
                          key={index}
                          className="w-[400px] h-[400px] rounded-xl overflow-hidden"
                        >
                          <img
                            src={imgSrc}
                            alt={`About image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                <div className="max-w-[900px] text-white/60 mx-auto xl:mx-0 space-y-4">
                  {about.description.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>

                    </li>
                  })}
                </ul>
              </div> 
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
}

export default Resume