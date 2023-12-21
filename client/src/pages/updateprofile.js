import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import toast from "react-hot-toast";
import { useSelector,useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../redux/slices/authAction';

const Updateprofile = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const [updatedData, setUpdatedData] = useState({});

    useEffect(()=>{
         setUpdatedData(user)
    },[user])

    const newData=(e)=>{
        setUpdatedData({...updatedData,[e.target.name]: e.target.value })
    }
    
    console.log(updatedData)
    const handleUpdate =async(e)=>{
         e.preventDefault()
         await dispatch(updateUser(updatedData));
         toast.success("profile updated successfully");
    }

    return (
        <Layout>
            <div className="mx-auto w-1/2 text-center bg-slate-200 pb-10 rounded-xl">
                <h2 className="mx-auto text-center mt-[5%] pt-[7%] -ml-6 pb-[5%] text-3xl">Update Profile</h2>
                <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
                    <div className ="mb-5">
                        <label>Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={updatedData && updatedData.name}
                            onChange={newData}
                            className='border-b-4 border-indigo-600 ml-5'
                        />
                    </div>
                    <div className ="mb-5">
                        <label className ="form-label">Email : </label>
                        <input
                            type="email"
                            name="email"
                            value={updatedData && updatedData.email}
                            disabled
                            className='border-b-4 border-indigo-600 ml-5'
                        />
                    </div>
                    <div className ="mb-5">
                        <label className ="form-label">Phone : </label>
                        <input
                            type="text"
                            name="phone"
                            value={updatedData && updatedData.phone}
                            onChange={newData}
                            className='border-b-4 border-indigo-600 ml-5'
                        />
                    </div>

                    <div className ="mb-5">
                        <label className ="form-label">Address : </label>
                        <input
                            type="text"
                            name="address"
                            value={updatedData && updatedData.address}
                            onChange={newData}
                            className='border-b-4 border-indigo-600 ml-5'
                        />
                    </div>
                    
                    <button type="submit" className='bg-green-400 px-12 py-3 rounded-lg mt-10'>
                        Submit
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Updateprofile;
