"use client";
import CountUp from "react-countup";
import { certifications } from '../data/resume';

const stats =[
    {
        num:3,
        text: "Years of Professional Experience"
    },
    {
        num:12,
        text: "Projects completed"
    },
    {
        num:certifications.cert_items.length,
        text: "Certfications Earned"
    }
]
const Stats = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mxauyo xl:max-w-none">
                {stats.map((Item,index)=>{
                    return (
                        <div 
                        className="flex-1 flex gap-4 items-center justify-center"
                        key={index}>
                        <CountUp 
                        end={Item.num}
                        duration={5}
                        delay={2}
                        className="text-4xl xl:text-6xl font-extrabold"
                        />
                        <p className={`${Item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/90`}>{Item.text}</p>
                        </div>);
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats