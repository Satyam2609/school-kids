import React from 'react'
import {motion} from 'framer-motion'
import {TypeAnimation} from 'react-type-animation'
import { useInView } from 'react-intersection-observer'

function Visiter() {
    const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2  

  })
  return (
  <div className="bg-gradient-to-br from-purple-300 to-yellow-200 h-[90rem] flex items-center justify-center p-8">
        <div className="absolute top-[-5rem] left-[-5rem] w-72 h-72 bg-pink-300 rounded-full z-0 opacity-50 blur-[1px] animate-pulse"></div>
  <div className="absolute top-[10rem] left-[5rem] w-44 h-44 bg-blue-200 rounded-full z-0 opacity-60 blur-sm animate-bounce"></div>
  <div className="absolute bottom-[-3rem] left-[3rem] w-40 h-40 bg-yellow-200 rounded-full z-0 blur-[1px] opacity-60 animate-pulse"></div>
  <div className="absolute top-[8rem] right-[4rem] w-60 h-60 bg-green-200 rounded-full z-0 blur-[2px] opacity-50 "></div>
  <div className="absolute bottom-[0rem] right-[0rem] w-52 h-52 bg-purple-200 rounded-full z-0 blur-sm opacity-50 animate-pulse"></div>
        <div className='h-[30rem]'>
            
            
            <motion.img 
            
            initial={{y:200 , opacity:0}}
        animate={{y:0 , opacity:1} }
        transition={{type:"spring" , stiffness:80 , damping:55 }} className='h-[9rem] ml-[-11.6rem] mt-[-20rem] md:left-[22rem] absolute right-[16rem]  md:h-[25rem]  rounded-lg ' src='/assets/visted.jpg'></motion.img>
        </div>
        <motion.div
        initial={{y:200 , opacity:0}}
        animate={{y:0 , opacity:1}}
        transition={{type:"spring" , stiffness:80 , damping:55 }}
        
         className='w-[5rem] mb-[76rem] border border-red-100'>
         <TypeAnimation
    sequence={[
     "🌟 At Kidz School, we turn every day into an adventure! From the moment your child walks in, creativity ✂️, and curiosity 🤔.Our classrooms echo with laughter 😂 and learning 🧠,  🪄 to help young minds bloom 🌸 and build the confidence they need to shine" , 2000,
      () => {},
    ]}
    wrapper='span'
    speed={20}
    repeat={Infinity}
    className= 'text-lg md:text-4xl md:mb-[23rem] mb-[20rem] w-[14rem] md:w-[50rem] absolute  text-purple-500'
    />
    </motion.div>




     <motion.div
     ref={ref}
        initial={{y:200 , opacity:0}}
        animate={inView ?{y:0 , opacity:1} : {}}
        transition={{type:"spring" , stiffness:80 , damping:55 }}
         className='w-[5rem] mt-[10rem] absolute right-[19rem] md:right-[90rem]'>
         <TypeAnimation
    sequence={[
     'At Kidz School,we believe that every child deserves a colorful,engaging, and safe space to learn and grow.' , 2000,
      () => {},
    ]}
    wrapper='span'
    speed={20}
    repeat={Infinity}
    className= 'text-lg md:text-4xl md:mt-[1rem] md:mb-[30rem] mb-[69rem] w-[14rem] md:w-[50rem] absolute md:top-[0rem] top-[-18rem]  text-purple-500'
    />
    </motion.div>

    <div className='h-[30rem] mt-[20rem]'>
            
            
            <motion.img 
            ref={ref}

            initial={{y:200 , opacity:0}}
        animate={inView?{y:0 , opacity:1} : {}}
        transition={{type:"spring" , stiffness:80 , damping:55 }} className='h-[9rem] ml-[-11.6rem] md:mt-[8rem] mt-[-8rem] md:left-[90rem] absolute right-[2rem] md:right-[10rem]   md:h-[25rem]  rounded-lg ' src='/assets/visted2.jpg'></motion.img>
        </div>


    
        
    
    </div>
    
  )
}

export default Visiter
