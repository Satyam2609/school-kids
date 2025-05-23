import React from 'react'
import slide from './HomeData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import data from './HomeShowData'
import { NavLink } from 'react-router-dom'

function Home() {
  const slides = slide.map((item) => (
    <img src={item.image} role='presentation' className='w-full h-auto object-cover' key={item.id} alt="" />
  ))

  return (
    <>
    <NavLink to='/Admission'>
      <div className='w-full overflow-hidden'>
        <AliceCarousel
          items={slides}
          autoPlay
          autoPlayInterval={2000}
          infinite
          disableButtonsControls
          disableDotsControls
        />
      </div>
      </NavLink>

      <div className='bg-gradient-to-br from-rose-100 via-yellow-100 to-orange-100 py-10 px-4 relative'>
        <div className='absolute w-40 h-40 bg-yellow-400 rounded-full opacity-30 top-10 left-10 md:left-20'></div>
        <div className='absolute w-96 h-96 bg-red-400 rounded-full opacity-30 top-20 right-10 md:right-20'></div>
        <div className='absolute w-40 h-40 bg-blue-400 rounded-full opacity-30 top-10 left-1/2 transform -translate-x-1/2 md:left-20'></div>

        {data.map((data, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center my-10 relative">
            <img src={data.image} className='w-3/4 md:w-1/2 h-auto mb-4 md:mb-0' alt={data.title} />
            <div className='md:ml-10'>
              <div className='text-2xl md:text-4xl underline'>{data.title}</div>
              <div className='text-lg md:text-2xl my-2'>{data.title2}</div>
              <div className='text-2xl md:text-4xl underline my-2'>{data.title3}</div>
              <div className='text-lg md:text-2xl'>{data.title4}</div>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-purple-500 flex flex-wrap justify-center items-center gap-4 py-10'>
        <div
          className='h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 border-2 rounded-2xl shadow-lg hover:scale-135 transition-transform duration-300'
          style={{ backgroundImage: `url('/assets/PLAYGROUP.png')`, backgroundSize: 'cover' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundImage = `url('/assets/PLAYGROUP.jpg')`)}
          onMouseLeave={e => (e.currentTarget.style.backgroundImage = `url('/assets/PLAYGROUP.png')`)}
        ></div>

        <div
          className='h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 border-2 rounded-2xl shadow-lg hover:scale-135 transition-transform duration-300'
          style={{ backgroundImage: `url('/assets/NURSERYM.jpg')`, backgroundSize: 'cover' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundImage = `url('/assets/NURSERY.jpg')`)}
          onMouseLeave={e => (e.currentTarget.style.backgroundImage = `url('/assets/NURSERYM.jpg')`)}
        ></div>

        <div
          className='h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 border-2 rounded-2xl shadow-lg hover:scale-135 transition-transform duration-300'
          style={{ backgroundImage: `url('/assets/JUNIORKGM.jpg')`, backgroundSize: 'cover' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundImage = `url('/assets/JUNIORKG.jpg')`)}
          onMouseLeave={e => (e.currentTarget.style.backgroundImage = `url('/assets/JUNIORKGM.jpg')`)}
        ></div>

        <div
          className='h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 border-2 rounded-2xl shadow-lg hover:scale-135 transition-transform duration-300'
          style={{ backgroundImage: `url('/assets/SENIORKGM.jpg')`, backgroundSize: 'cover' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundImage = `url('/assets/SENIORKG.jpg')`)}
          onMouseLeave={e => (e.currentTarget.style.backgroundImage = `url('/assets/SENIORKGM.jpg')`)}
        ></div>
      </div>

      <div className='bg-yellow-200 py-10 px-4 relative overflow-hidden'>
        <img src='/assets/butterfly.png' className='h-32 sm:h-40 md:h-60 animate-pulse absolute top-0 left-0 z-10' alt="Butterfly 1" />
        <img src='/assets/butterfly.png' className='h-32 sm:h-40 md:h-60 animate-pulse absolute bottom-0 right-0 z-10' alt="Butterfly 2" />
        <div className='text-center text-base sm:text-lg md:text-xl max-w-4xl mx-auto relative z-20'>
          At , we believe every child is special and deserves a nurturing environment where learning is fun, values are strong,
          and dreams take flight. Our mission is to create a second home for your child where they dont just learn ABCs, but
          also the art of kindness, creativity, and confidence. With a team of experienced teachers, vibrant classrooms, safe play
          areas, and a holistic approach to education, we ensure your little one enjoys every moment of their journey.
          From playful learning to strong moral foundations, we prepare your child for life — not just exams. Join our school family
          today, and lets build a bright future together one smile at a time!
        </div>
      </div>

      <footer className='bg-violet-700 py-10 text-white text-sm sm:text-base md:text-lg'>
        <div className='flex flex-col sm:flex-row justify-around items-start px-4'>
          <div>
            <img className='h-10 mb-2' src='/assets/logo.avif' alt='Logo' />
            <p>kidzafirststep@gmail.com</p>
            <p>+91 9770776655</p>
          </div>
          <ul className='mt-4 sm:mt-0'>
            <li className='hover:text-gray-400 cursor-pointer'>Play group</li>
            <li className='hover:text-gray-400 cursor-pointer mt-2'>Nursery</li>
            <li className='hover:text-gray-400 cursor-pointer mt-2'>Kinder garden</li>
          </ul>
          <ul className='mt-4 sm:mt-0'>
            <li className='hover:text-gray-400 cursor-pointer'>Contact us</li>
            <li className='hover:text-gray-400 cursor-pointer'>+91 9770776655</li>
            <li className='hover:text-gray-400 cursor-pointer'>kidzafirststep@gmail.com</li>
            <li className='hover:text-gray-400 cursor-pointer'>🕒 10:00 AM to 6:00 PM (Mon-Fri)</li>
          </ul>
        </div>

        <div className="flex  justify-end mt-3 sm:mt-0 pr-4">
  <ul className="flex flex-col justify-end items-center text-[8px] sm:text-xs space-x-2 sm:space-x-3 text-gray-400 cursor-pointer text-right">
    <li>Developer: Satyam Jain</li>
    <li>satyam26092004@gmail.com</li>
    <li>8269725282</li>
  </ul>
</div>

      </footer>
    </>
  )
}

export default Home
