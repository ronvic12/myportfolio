import Link from "next/link";

import {FaGithub,FaLinkedin} from 'react-icons/fa';

const socials = [
    {icon: <FaGithub/>,path:'https://github.com/ronvic12'},
    {icon: <FaLinkedin/>,path:'https://www.linkedin.com/in/ronvic-cuevas/'}
];

const Socials = ({containerStyles, iconStyles}) =>{
    return <div className={containerStyles}>
    {socials.map((item,index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
    })}
    
    </div>
}

export default Socials;