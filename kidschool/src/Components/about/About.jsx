import React, { useState } from 'react';

function About() {

const Accordianitem = ({question , answer}) => {
  const [isOpen , setisOpen] = useState(false);

  const toggleaccodian = () => setisOpen(!isOpen);

  return(
    <div className='mb-3'>
      <button className='w-full text-left bg-yellow-200 px-4 py-2 rounded-md'
      onClick={toggleaccodian}
      >{question}</button>

      {
        isOpen && (
          <div className='bg-white px-4 py-2'>
            {answer}
          </div>
        )
      }
    </div>
  )
}


  const data = [
    {
      question:"What are the admission procedures for the upcoming academic year?",
      answer:"Admission forms can be filled online through our website. After submission, shortlisted students will be invited for an interaction/interview. Final selection will be based on merit and seat availability."
    },
    {
      question:"What age criteria are required for nursery or KG admissions?",
      answer:" For Nursery, the child should be at least 3 years old as on 31st March of the academic year. For KG, the minimum age is 4 years."
    },
    {
      question:"What documents are required during admission?",
      answer:"Birth certificate of the child,Recent passport-size photographs,Address proof,Previous class report card (if applicable)"
    },
    {
      question:"Is there a school transport facility available?",
      answer: "Yes, we offer safe and reliable transport services on all major routes. The fee varies based on the distance."
    }

  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-yellow-100 to-sky-200 flex flex-col md:flex-row items-center justify-center px-4 py-10 gap-10">
      
      <div className="w-full md:w-1/3 flex justify-center md:justify-start">
        <img
          src="/assets/about.png"
          className="w-[70%] sm:w-[60%]  bg-white md:w-full max-w-[300px] rounded-xl object-contain "
          style={{marginLeft:"80px"}}
          alt="About"
        />
      </div>
      <div className="w-full md:w-2/3 bg-white p-5 sm:p-6 md:p-20 rounded-xl shadow-lg">
        <p className="text-justify text-xs sm:text-sm md:text-base leading-relaxed">
          <strong>Welcome to Kidz a First Step</strong>, a nurturing and vibrant learning community where young minds grow, explore, and thrive. Founded with a vision to provide holistic education in a safe and joyful environment, our school caters to children from Play Group to Grade 5.
          <br /><br />
          At <strong>Kidz the First Step</strong>, we believe that every child is unique and full of potential. Our curriculum blends play-based learning in the early years with a strong academic foundation as students progress. We focus on developing not just knowledge but also creativity, confidence, and values that last a lifetime.
          <br /><br />
          Our experienced and caring teachers use innovative teaching methods to make learning engaging and meaningful. We maintain small class sizes to ensure individual attention and foster a close-knit, supportive atmosphere.
          <br /><br />
          We aim to inspire curiosity, build character, and prepare our students to become responsible, kind, and capable individuals. Join us on this exciting journey of learning and growth!
        </p>


        <div>
        {
          data.map((item , index) => (
            <Accordianitem 
            key = {index}
            question = {item.question}
            answer = {item.answer} />
          ))
        }
      </div>
        
      </div>
      

      

      
    </div>

    
  );
}

export default About;
