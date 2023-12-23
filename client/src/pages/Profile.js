import React from 'react'
import Layout from '../components/Layout/Layout'
import { useSelector } from "react-redux";


const Profile = () => {

    const { user } = useSelector((state) => state.auth);

    console.log(user);


    return (
        <Layout>
            <div className='flex flex-row justify-center mt-[5%]'>
                <div className=' mt-[3%]'>
                    <img src={`http://localhost:8080/${user.photo}`} className="w-60 h-60 p-2 rounded-full bg-lime-100" alt="image not found" />
                    <p className='text-center mt-3'>Profile Photo</p>
                </div>
                <div className='ml-[7%] bg-slate-200 rounded-md p-12'>
                    <p className='text-center font-bold text-xl text-violet-500'>Profile Details</p>
                    <p className='mb-3'>Name: {user.name}</p>
                    <p className='mb-3'>Email: {user.email}</p>
                    <p className='mb-3'>Mobile: {user.phone}</p>
                    <p className='mb-3'>Address: {user.address}</p>
                    <p className='mb-3'>Profile Created at :{user.createdAt}</p>
                    <p className='mb-3'>Last Time Profile Updated at :{user.updatedAt}</p>
                    <button className=' bg-black text-white p-2 rounded-lg' onClick={() => window.location.replace("/mycourse")}>Go To Courses</button>
                </div>
            </div>
            <div className='flex flex-center justify-center items-center mt-[5%] pb-[2%]'>
                <button onClick={()=>window.location.replace("/profile-updateprofile")} className='text-center bg-black text-white p-2.5 rounded-lg'>
                    Update Profile
                </button>
            </div>
        </Layout>
    )
}

export default Profile