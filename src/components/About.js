
import React from "react";
import {Box, Grid} from "@mui/material";
import './About.css';
import classNames from 'classnames';




export default function About() {
  return (
    // <section id="about">
    //   <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
    //     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    //       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
    //         Hi, I'm Reed.
    //         <br className="hidden lg:inline-block" />I love to build amazing
    //         apps.
    //       </h1>
    //       <p className="mb-8 leading-relaxed">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
    //         laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
    //         Laborum, voluptas natus?
    //       </p>
    //       <div className="flex justify-center">
    //         <a
    //           href="#contact"
    //           className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
    //           Work With Me
    //         </a>
    //         <a
    //           href="#projects"
    //           className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
    //           See My Past Work
    //         </a>
    //       </div>
    //     </div>
    //     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    //       <img
    //         className="object-cover object-center rounded"
    //         alt="hero"
    //         src="./coding.svg"
    //       />
    //     </div>
    //   </div>
    // </section>

    <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         {/* <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}} */}
         <Box component={'img'} src={"images/memoji.png"} width={{xs: '35vh', md: '50vh'}}
              height={{xs: '35vh', md: '50vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box width={{xs: '35vh', md: '70vh'}}>
            <h1>Hello! I'm <span class = "name">Sheri </span><span class="hand">🤚</span>
            </h1>
            <h3>I'm an applied mathematics-economics and computer science student at Brown University. 
                <br/>
                <br/>

                I love technology, coffee, and all things new. </h3>
            {/* <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box> */}
         </Box>
    </Box>
  );
}