import {Button} from "@/components/ui/button";
import Socials from "@/components/ui/Socials";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";
import {FiDownload} from "react-icons/fi";
const Home = () => {
  return (
    <section className="h-full">
      <div className='container mx-auto h-full'>
        <div className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none flex-1">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">
              Hello I'm <br/> <span className="text-[var(--textaccent)]">Ronvic Cuevas</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I strive to create effective solutions and am always looking to grow my skills. 
            I'm comfortable working with a range of programming languages and technologies, and I enjoy learning new things. 
            I value collaboration and believe in working together to achieve the best results.
            </p>
            {/*Button and Socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/MyCV.pdf" download>
              <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" 
                iconStyles={"w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"}
                />
              </div>
            </div>
          </div>
           {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/> 
            </div>             
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home
