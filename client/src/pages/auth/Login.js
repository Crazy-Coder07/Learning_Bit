import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import img1 from "../../components/images/bcg1.jpg";
import { handleLogin } from './../../services/authService';
import {
  Animate,
  initTE,
} from "tw-elements";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registrationform = async (e) => {
    return handleLogin(e, email, password);
  };
  useEffect(() => {
    initTE({ Animate });
  }, []);

  return (
    <Layout>
      <div className="bg-cover w-screen h-screen" style={{ backgroundImage: `url(${img1})` }}>
        <form onSubmit={registrationform} >
          <div className="flex justify-center items-center">
            <div data-te-animation-init
              data-te-animation-reset="true"
              data-te-animation="[slide-right_1s_ease-in-out]"
            >
              <div className="bg-white text-black h-[400px] w-[400px] mt-20 text-center p-10 rounded-lg py-[16%]">
                <div className="mb-4 font-bold text-xl">Please Fill The Login Form</div>
                <div className="font-bold">Email:</div>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="border-green-400 border-2 rounded-lg p-2 w-full h-10"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="font-bold">Password:</div>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="border-green-400 border-2 rounded-lg p-2 w-full h-10"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="h-10 w-25 border-white-400 border-2 rounded-lg p-1 bg-green-400 mt-4">
                  <button type="submit">Submit Form</button>
                </div>
                <div>Need an account ? <Link to="/register" className=' text-sky-600 underline'>Sign Up </Link>here</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
