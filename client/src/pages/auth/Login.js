import React, { useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import img1 from '../components/images/bcg1.jpg';
import axios from 'axios';
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const registrationform = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      });
      if (data && data.success) {
        toast.success("Registration successful");
        localStorage.setItem("token", data.token);
        navigate("/");
      }else if (data && data.message === "User Not Register Please Sign Up First") {
        toast.success("User already registered. Please Login.");
      }
    }catch (error) {
        toast.error('Something went wrong');
    }
  };
  

  return (
    <Layout>
      <div className="bg-cover w-screen h-screen" style={{ backgroundImage: `url(${img1})` }}>
        <form onSubmit={registrationform}>
          <div className="flex justify-center items-center">
            <div className="bg-white text-black h-[360px] w-[360px] mt-20 text-center p-10 rounded-lg">
              <div className="mb-4 font-bold text-xl">Please Fill The Login Form</div>
              <div className="font-bold">Email:</div>
              <input
                type="text"
                placeholder="Enter email"
                className="border-green-400 border-2 rounded-lg p-1"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="font-bold">Password:</div>
              <input
                type="text"
                placeholder="Enter password"
                className="border-green-400 border-2 rounded-lg p-1"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="h-10 w-25 border-white-400 border-2 rounded-lg p-1 bg-green-400 mt-4">
                <button type="submit">Submit Form</button>
              </div>
              <div>Need an account ? <Link to="/register" className=' text-sky-600 underline'>Sign Up </Link>here</div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
