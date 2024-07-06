import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { gsapToAnimations } from '../utils/animations'

const Chip = () => {
    const videoRef=useRef()
    useGSAP(()=>{
        gsap.from('#chip',{
            scrollTrigger:{
                trigger:'#chip',
                start:'20% bottom',               
            },
            opacity:0,
            scale:2,
            duration:2,
            ease:'power2.inOut'
        })


        gsapToAnimations('.g_fadeIn',{
            y:0,
            opacity:1,
            duration:1,
            ease:'power2.inOut'
        }

        )
    },[])
  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <div id='chip' className='flex-center w-full my-20'>
                <img alt='chip' src={chipImg} width={180} height={180}/>
            </div>

            <div className='flex flex-col items-center'>
                <h2 className='hiw-title'>A17 Pro chip</h2>
                <br/>
                <p className='hiw-subtitle'>It's here. The biggest redesign in the history of apple GPUs.</p>
            </div>

            <div className='mt-10 md:mt-20 mb-14 '>
                <div className='relative h-full flex-center'>
                    <div className='overflow-hidden'>
                        <img src={frameImg} alt='frame' className='relative bg-transparent z-10'/>                        
                    </div>

                    <div className='hiw-video '>
                        <video
                            className='pointer-events-none'
                            src={frameVideo}
                            type="video/mp4"
                            playsInline
                            preload='none'
                            muted
                            autoPlay
                            ref={videoRef}
                        />
                    </div>
                </div>

                <p className='text-gray font-semibold text-center mt-3'>Honkai: Star Rail</p>

            </div>

            <div className='hiw-text-container'>

                
                    <div className='flex flex-1 flex-col gap-y-8  justify-center'>
                        <p className='hiw-text g_fadeIn'>
                            A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                            <span className='text-white'>
                            best graphic performance by far
                            </span>
                            .
                        </p>


                        <p className='hiw-text g_fadeIn'>
                            Mobile {' '}
                            <span className='text-white'>
                            games will look and feel so immersive {' '}
                            </span>
                            with incredibly detailed environments and characters.
                        </p>
                    </div>

                    


                    <div className='flex-1 flex justify-center flex-col g_fadeIn'>
                        <p className='hiw-text'>New</p>
                        <p className='hiw-bigtext'>Pro-class GPU</p>
                        <p className='hiw-text'>with 6 cores</p>
                    </div>
            </div>


                

        </div>
    </section>
  )
}

export default Chip