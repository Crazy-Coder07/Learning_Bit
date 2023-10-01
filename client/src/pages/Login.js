import React from 'react';
import Layout from '../components/Layout/Layout';
import img1 from '../components/images/bcg1.jpg';

const Login = () => {
  return (
    <Layout>
      <div className="bg-cover w-screen h-screen  " style={{ backgroundImage: `url(${img1})` }}>
        <div className='flex justify-center items-center'>
          <div className=' bg-white text-black h-[300px] w-[350px] mt-10 text-center p-10 rounded-lg mt-40'>
            <div className='mb-4 font-bold text-xl'>Please Fill The Login Form</div>
            <div className='font-bold'>Email:</div>
            <input type="text" placeholder='Enter email' className='border-green-400 border-2 rounded-lg p-1' />
            <div className='font-bold'>Password:</div>
            <input type="text" placeholder='Enter password' className='border-green-400 border-2 rounded-lg p-1' />
            <div className='h-10 w-25 border-white-400 border-2 rounded-lg p-1 bg-green-400 mt-4'><button>Submit Form</button></div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Login;
