import React from 'react';
import Layout from '../components/Layout/Layout';
import img1 from '../components/images/bcg.jpg';

const Register = () => {
  return (
    <Layout>
      <div className="bg-cover w-screen h-screen  " style={{ backgroundImage: `url(${img1})` }}>
        <div className='flex justify-center items-center '>
          <div className=' bg-white text-black h-[480px] w-[450px] mt-10 text-center p-10 rounded-lg'>
            <div className='mb-4 font-bold text-xl'>Please Fill The Registration Form</div>
            <div className='font-bold'>Name:</div>
            <input type="text" placeholder='Enter name' className='border-green-400 border-2 rounded-lg p-1'/>
            <div className='font-bold'>Email:</div>
            <input type="text" placeholder='Enter email' className='border-green-400 border-2 rounded-lg p-1' />
            <div className='font-bold'>Password:</div>
            <input type="text" placeholder='Enter password' className='border-green-400 border-2 rounded-lg p-1'/>
            <div className='font-bold'>Mobile No:</div>
            <input type="text" placeholder='Enter mobile No' className='border-green-400 border-2 rounded-lg p-1'/>
            <div className='font-bold'>City:</div>
            <input type="text" placeholder='Enter city name' className='border-green-400 border-2 rounded-lg p-1' />
            <div className='h-10 w-25 border-white-400 border-2 rounded-lg p-1 bg-green-400 mt-4'><button>Submit Form</button></div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Register;
