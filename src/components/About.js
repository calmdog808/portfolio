
import React from "react";
import {Box, Grid} from "@mui/material";
import './About.css';
import classNames from 'classnames';




export default function About() {
  return (


    <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         {/* <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}} */}
         <Box component={'img'} src={"images/dog.png"} width={{xs: '35vh', md: '50vh'}}
              height={{xs: '35vh', md: '50vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box width={{xs: '35vh', md: '77vh'}}>
            <h1>Hello! I'm <span class = "name">calmdog808 </span><span class="hand"> 🥐</span>
            </h1>
            <h3>I'm an applied mathematics-economics and computer science student at Brown University, and I love technology, coffee, and all things new 
                <br/>
                <br/>
                Recently, I've been trying my hand at uiux design. I'm not the best by any means, but if you wanna see some of my work keep scrolling :)
            </h3>
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