import React, { useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import img1 from '../components/images/bcg.jpg';
import axios from 'axios';
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const registrationform = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name,
        email,
        password,
        phone,
        address,
      });
      if(password.length<4){
        toast.error('Password must be at least 4 characters');
      }
      else if (data && data.success) {
        toast.success("Registration successful");
        navigate("/login");
      }else if (data && data.message === "User Already Exists Please Login") {
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
            <div className="bg-white text-black h-[480px] w-[450px] mt-20 text-center p-10 rounded-lg">
              <div className="mb-4 font-bold text-xl">Please Fill The Registration Form</div>
              <div className="font-bold">Name:</div>
              <input
                type="text"
                placeholder="Enter name"
                className="border-green-400 border-2 rounded-lg p-1"
                onChange={(e) => setName(e.target.value)}
              />
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
              <div className="font-bold">Phone No:</div>
              <input
                type="text"
                placeholder="Enter phone No"
                className="border-green-400 border-2 rounded-lg p-1"
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="font-bold">Address:</div>
              <input
                type="text"
                placeholder="Enter address name"
                className="border-green-400 border-2 rounded-lg p-1"
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="h-10 w-25 border-white-400 border-2 rounded-lg p-1 bg-green-400 mt-4">
                <button type="submit">Submit Form</button>
              </div>
              <div>Already have an account ? <Link to="/login" className=' text-sky-600 underline'>Sign In </Link>here</div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
