import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo} from "../utils"


const HeroSection = () => {

  const [videoSrc,setVideoSrc]=useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleHeroVideo=()=>{
    if(window.innerWidth <760){
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize',handleHeroVideo)

    return ()=>{
      window.removeEventListener('resize',handleHeroVideo)
    }
  },[])


  useGSAP(()=>{
    gsap.to("#heroTitle",{
      opacity:1,
      delay:1.5
    })

    gsap.to("#cta",{
      opacity:1,
      delay:1.5,
      y:-50,
      duration:1
    })
  },[])



  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-col flex-center '>
        <p id='heroTitle' className='hero-title'>iPhone 15 Pro</p>

        <div className='md:w-10/12 w-3/4'>
          <video className=' pointer-events-none   ' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4'/>
          </video>
        </div>
      </div>

      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20 '>
        <a href='3highlights' className='btn'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>

    </section>
  )
}

export default HeroSection