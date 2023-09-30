import React from 'react';
import Layout from '../components/Layout/Layout';
import img1 from '../../src/components/images/founder.jpg';
import { BiMap } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { HiMiniComputerDesktop } from 'react-icons/hi2';

const Contact = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center'>
        <img className="h-40 w-30 rounded-full my-5" src={img1} alt="" />
        <div className='text-center font-bold text-xl bg-lime-300 p-4 rounded-lg lg:w-1/5 xl:w-1/6'>
          FOUNDER & ADMIN
        </div>
      </div>
      <div className='flex flex-col justify-center items-center my-2'>
        <h1 className='font-bold text-xl'>Contact Us</h1>
        <div className='max-w-screen-md text-center'>
          Use our contact form for all information requests or contact us directly using the contact information below
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center'>
        <div className='m-3 lg:m-2 w-full lg:w-72 p-5 bg-gray-300'>
          <BiMap className='mx-auto h-10 w-10'/>
          <h1 className='font-bold '>Our Location</h1>
          <p>KhelGaun Housing Complex, Ranchi 834001</p>
        </div>

        <div className='m-3 lg:m-2 w-full lg:w-72 p-5 bg-gray-300'>
          <BsFillTelephoneFill className='mx-auto h-10 w-10'/>
          <h1 className='font-bold '>Phone Number</h1>
          <p>+91 7479535799</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center mt-4'>
        <div className='m-3 lg:m-2 w-full lg:w-72 p-5 bg-gray-300 mr'>
          <CgMail className='mx-auto h-10 w-10'/>
          <h1 className='font-bold '>EMAIL</h1>
          <p>adityaranjan2515@gmail.com</p>
        </div>

        <div className='m-3 lg:m-2 w-full lg:w-72 p-5 bg-gray-300'>
          <HiMiniComputerDesktop className='mx-auto h-10 w-10'/>
          <h1 className='font-bold '>Visit Our Other Website</h1>
          <p><a href="https://aditya-ranjan.cyclic.app/" className=' text-emerald-700 font-bold'>Shopping</a></p>
          <p><a href="https://aditya-savelives.onrender.com/" className=' text-emerald-700 font-bold'>Blood bank</a></p>
          <p><a href="https://aditya-blog.onrender.com/" className=' text-emerald-700 font-bold'>Blogging</a></p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
