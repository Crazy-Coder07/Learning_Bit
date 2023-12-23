import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import img1 from "../../components/images/bcg.jpg";
import { handleRegister } from '../../services/authService';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [image,setImage] = useState('');

  const registrationform = async (e) => {

    // const formData = new FormData();
    // formData.append("image",image);

    return handleRegister(e,name,email,password,phone,address,image);
  };

  return (
    <Layout>
      <div className="bg-cover w-screen h-screen" style={{ backgroundImage: `url(${img1})` }}>
        <form onSubmit={registrationform}>
          <div className="flex justify-center items-center">
            <div className="bg-white text-black h-[520px] w-[480px] mt-20 text-center p-5 rounded-lg">
              <div className="mb-4 font-bold text-xl">Please Fill The Registration Form</div>
              <div>
                <label htmlFor="name" className="block font-bold mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-green-400 border-2 rounded-lg p-2 w-full"
                  placeholder="Enter name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-bold mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-green-400 border-2 rounded-lg p-2 w-full"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block font-bold mb-1">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-green-400 border-2 rounded-lg p-2 w-full"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-bold mb-1">
                  Phone No:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-green-400 border-2 rounded-lg p-2 w-full"
                  placeholder="Enter phone No"
                />
              </div>
              <div>
                <label htmlFor="address" className="block font-bold mb-1">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="border-green-400 border-2 rounded-lg p-2 w-full"
                  placeholder="Enter address name"
                />
              </div>
              <div>
                <label htmlFor="address" className="block font-bold mb-1">
                  Profile Photo:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="border-green-400 border-2 rounded-lg p-2 w-full"
                  placeholder="Enter Profile Photo"
                />
              </div>
              <div className="h-10 w-25 border-white-400 border-2 rounded-lg p-1 bg-green-400 mt-4">
                <button type="submit">Submit Form</button>
              </div>
              <div>Already have an account? <Link to="/login" className='text-sky-600 underline'>Sign In</Link> here</div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
