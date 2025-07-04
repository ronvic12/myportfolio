import { BiLogoVisualStudio } from "react-icons/bi";
import { FaHtml5,FaCss3Alt,FaReact,FaNodeJs,FaPython,FaWindows,FaGitAlt,FaLinux} from "react-icons/fa";
import { SiMysql,SiAmazonrds,SiCodeberg,SiSqlite, SiDotnet, SiJavascript, SiShopify, SiNextdotjs, SiVercel, SiJquery, SiBootstrap, SiExpress, SiJson, SiGithub, SiTailwindcss } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { PiTerminalWindowFill } from "react-icons/pi";
import { TbBrandVscode } from "react-icons/tb";

export const skills = {
  title:"My Skills",
  description:"",
  skill_list:[
    {
      category: "Programming Languages",
      items: [
        { name: "C#", icon: <TbBrandCSharp className="text-purple-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Python", icon: <FaPython className="text-blue-400" /> },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
        { name: "NodeJS", icon: <FaNodeJs className="text-green-500" /> },
        { name: "NextJS", icon: <SiNextdotjs/> },
        { name: "JQuery", icon: <SiJquery className="text-blue-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
        { name: "ExpressJS", icon: <SiExpress /> },
        { name: "ASP.NET", icon: <SiDotnet className="text-indigo-500" /> },
        { name: "JSON", icon: <SiJson className="text-gray-600" /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: <div className="bg-blue-700 rounded-full p-2 inline-block">
  <SiMysql className="text-white" />
</div> },
        { name: "SQLite", icon: <SiSqlite className="bg-white text-blue-400" /> },
        { name: "Amazon RDS", icon: <SiAmazonrds className="text-orange-400" /> },
      ],
    },
    {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Visual Studio", icon: <BiLogoVisualStudio className="text-purple-700" /> },
      { name: "VS Code", icon: <TbBrandVscode className="text-blue-700"/>},
      { name: "Shopify", icon: <SiShopify className="text-green-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },

    {
      category: "OS & Scripting",
      items: [
        { name: "Windows", icon: <FaWindows className="text-blue-600" /> },
        { name: "Linux", icon: <FaLinux style={{ color: '#000000', filter: 'drop-shadow(0 0 2px #FFA500)' }} /> },
        { name: "Batch Script", icon: <PiTerminalWindowFill/> }, // Placeholder icon
      ],
    }

  ]
};