import React from 'react';
import Layout from '../components/Layout/Layout';
import img1 from '../../src/components/images/about.jpg';
import { BsBook } from 'react-icons/bs';
import { GrUserExpert } from 'react-icons/gr';
import { BiVideoRecording } from 'react-icons/bi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { Ri24HoursFill } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';

const About = () => {
  return (
    <Layout>
      <div className='flex flex-col lg:flex-row'>
        <img className='w-full lg:w-1/2 h-[300px] lg:h-300 p-3' src={img1} alt='about' />
        <div className='p-3 lg:pl-6 pt-5 lg:w-1/2'>
          <h1 className='font-bold text-xl text-center lg:text-left'>Get to Know About Us</h1>
          <p className='text-center lg:text-left'>
            Welcome to LearningBit, where learning meets innovation. We are passionate about education and dedicated to making it accessible to everyone, anywhere, and at any time.
          </p>
          <ul className='list-disc list-inside pl-3 mt-2 text-center lg:text-left'>
            <li>We offer a diverse range of courses across various disciplines, from programming and technology</li>
            <li>Our courses are created and taught by industry experts</li>
            <li>We've designed our courses to fit your schedule. Whether you're a full-time professional or a student.</li>
          </ul>
        </div>
      </div>

      <h1 className='font-bold text-xl mt-5 text-center mb-8 bg-green-300 p-3'>
        Why Choose Learning<span className='text-red-400'>Bit</span>
      </h1>

      <div className='flex flex-col lg:flex-row justify-center lg:space-x-4'>
        <div className='m-3 w-full lg:w-72 bg-gray-300 p-6 text-center'>
          <BsBook className='mx-auto h-20 w-20' />
          <h1 className='font-bold '>Course Accessibility</h1>
          <p>
            Our courses are designed to be available anytime, anywhere, and on any device.
            We believe that learning should adapt to your schedule and lifestyle, ensuring that education is accessible to all.
          </p>
        </div>
        <div className='m-3 w-full lg:w-72 bg-gray-300 p-6 text-center'>
          <GrUserExpert className='mx-auto h-20 w-20' />
          <h1 className='font-bold '>Expert Instruction</h1>
          <p>
            Our courses are taught by industry experts with real-world experience.
            You'll learn from professionals who are passionate about sharing their knowledge and helping you succeed in your chosen field.
          </p>
        </div>
        <div className='m-3 w-full lg:w-72 bg-gray-300 p-6 text-center'>
          <BiVideoRecording className='mx-auto h-20 w-20' />
          <h1 className='font-bold '>Recorded Sessions</h1>
          <p>
            Missed a live class? No worries! Access recorded sessions at your convenience.
            Learn at your own pace and revisit content whenever you need it. Your education, your schedule.
          </p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center mt-4 lg:space-x-4'>
        <div className='m-3 w-full lg:w-72 bg-gray-300 p-6 text-center'>
          <FaChalkboardTeacher className='mx-auto h-20 w-20' />
          <h1 className='font-bold '>Course Schedule Learning</h1>
          <p>
            Our flexible course schedule allows you to learn on your terms. Choose when to start and progress through lessons at your own pace.
            Your education fits seamlessly into your life.
          </p>
        </div>
        <div className='m-3 w-full lg:w-72 bg-gray-300 p-6 text-center'>
          <Ri24HoursFill className='mx-auto h-20 w-20' />
          <h1 className='font-bold '>24/7 Support</h1>
          <p>
            We're here for you around the clock. Get assistance whenever you need it.
            Your questions, our answers, anytime, anywhere.
          </p>
        </div>
        <div className='m-3 w-full lg:w-72 bg-gray-300 p-6 text-center'>
          <SlCalender className='mx-auto h-20 w-20' />
          <h1 className='font-bold '>LifeTime Access</h1>
          <p>
            Once enrolled, enjoy lifetime access to course materials. Learn at your own speed and revisit content whenever you want.
            Your learning, your way, for a lifetime.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
