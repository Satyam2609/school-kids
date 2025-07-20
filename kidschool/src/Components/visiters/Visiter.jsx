import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer'

function Visiter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  return (
    <div className="relative bg-gradient-to-br from-purple-300 to-yellow-200 py-16 px-4 sm:px-8 lg:px-24 overflow-hidden">
      <div className="absolute top-[-5rem] left-[-5rem] w-72 h-72 bg-pink-300 rounded-full opacity-50 blur-[1px] animate-pulse z-0" />
      <div className="absolute top-[10rem] left-[5rem] w-44 h-44 bg-blue-200 rounded-full opacity-60 blur-sm animate-bounce z-0" />
      <div className="absolute bottom-[-3rem] left-[3rem] w-40 h-40 bg-yellow-200 rounded-full blur-[1px] opacity-60 animate-pulse z-0" />
      <div className="absolute top-[8rem] right-[4rem] w-60 h-60 bg-green-200 rounded-full blur-[2px] opacity-50 z-0" />
      <div className="absolute bottom-[0rem] right-[0rem] w-52 h-52 bg-purple-200 rounded-full blur-sm opacity-50 animate-pulse z-0" />

      <div className="relative z-10 flex flex-col gap-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 55 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <TypeAnimation
              sequence={[
                "🌟 At Kidz School, we turn every day into an adventure! From the moment your child walks in, creativity ✂️ and curiosity 🤔 shine. Our classrooms echo with laughter 😂 and learning 🧠 — a magical space for kids to bloom 🌸 and shine! ✨",
                2000
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              className="text-base md:text-2xl text-purple-500"
            />
          </motion.div>
          <motion.img
            src="/assets/visted.jpg"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 55 }}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
            alt="Visited 1"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Image */}
          <motion.img
            ref={ref}
            src="/assets/visted2.jpg"
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 55 }}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
            alt="Visited 2"
          />

          {/* Text */}
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 55 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <TypeAnimation
              sequence={[
                "🎈 At Kidz School, we believe every child deserves a colorful, safe, and engaging space to learn and grow. 📚✨",
                2000
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              className="text-base md:text-2xl text-purple-500"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Visiter
