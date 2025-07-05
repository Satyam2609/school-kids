import React, { forwardRef, useState } from 'react'
import data from './AdmisionData'
import emailjs from '@emailjs/browser';



function Admision() {
  const [formdata , setfromdata] = useState({
    name: '',
    email:'',
    number: '',
    location:'',
    class:'',
    DOB:'',
    MOTHER:'',
    FATHER:''
  })

  const handlechange = (e) => {
setfromdata({...formdata,[e.target.name] : e.target.value});
    
  }

  const handlesubmit = async (e) => {
    e.preventDefault();

    const serviceid = 'service_avl7kic';
    const  templateid = 'template_6m6ao82';
    const userid = '9RBjMgr-XKRZi9zeW';

    const templteprames = {
      name: formdata.name,
      email: formdata.email,
      number: formdata.number,
      location: formdata.location,
      class: formdata.class,
      DOB:formdata.DOB,
      MOTHER:formdata.MOTHER,
      FATHER:formdata.FATHER
    }

  
emailjs.send(serviceid , templateid, templteprames , userid)
.then((response) => {
  console.log('email sent succsessfully',response);
    alert('your form submited');
})
    
.catch((error) => {
   console.error('Error sending email:', error);
        alert('Failed to send the form data. Please try again.');
  })
}
  
  return (
    <>
      <div className="bg-gradient-to-br from-purple-300 to-yellow-200 min-h-screen flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-4xl relative">
          {data.map((item, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className="hidden md:block">
                <img
                  src={item.image}
                  alt="kids"
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
              <form className="space-y-6" onSubmit={handlesubmit}>
                <h2 className="text-3xl font-bold text-purple-700 text-center mb-4">
                  Admission Form
                </h2>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    name='name'
                    value={formdata.name}
                    onChange={handlechange}

                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    value={formdata.email}
                    onChange={handlechange}
                    name='email'
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="number"
                    placeholder="Phone"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    value={formdata.number}
                    name='number'
                    onChange={handlechange}
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Where are you from?</label>
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    value={formdata.location}
                    name='location'
                    onChange={handlechange}
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Select Class</label>
                  <select required value={formdata.class} name='class' onChange={handlechange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400">
                  
                    <option>Select class</option>
                    <option>Play Group</option>
                    <option>Nursery</option>
                    <option>KG 1</option>
                    <option>KG 2</option>
                    <option>class 1st</option>
                    <option>class 2nd</option>
                    <option>class 3rd</option>
                    <option>class 4th</option>
                    <option>class 5th</option>
                    <option>class 6th</option>
                    <option>class 7th</option>
                    <option>class 8th</option>

                  
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">STUDENT DOB:</label>
                  <input
                    type="text"
                    placeholder="DOB"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    value={formdata.DOB}
                    name='DOB'
                    onChange={handlechange}
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">FATHER NAME:</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    value={formdata.FATHER}
                    name='FATHER'
                    onChange={handlechange}
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">MOTHER NAME</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    value={formdata.MOTHER}
                    name='MOTHER'
                    onChange={handlechange}
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    onClick={handlesubmit}
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          ))}
          {data[0].image1 && (
            <img
              src={data[0].image1}
              alt="side"
              className="absolute top-6 right-6 w-24 h-24 rounded-xl shadow-md hidden md:block"
            />
          )}
          <p className="text-center mt-10 text-4xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-bounce">
            KIDZ A FIRST STEP
          </p>
        </div>
      </div>
    </>
  )
}

export default Admision
