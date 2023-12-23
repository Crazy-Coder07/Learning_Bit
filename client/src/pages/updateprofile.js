import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import toast from "react-hot-toast";
import { useSelector,useDispatch} from "react-redux";
import { updateUser } from '../redux/slices/authAction';

const Updateprofile = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch=useDispatch();



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [image,setImage] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setAddress(user.address);
        setPassword(user.password);
    },[user])

    
    const handleUpdate =async(e)=>{
         e.preventDefault()
         await dispatch(updateUser({name,email,password,phone,address,image}));
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='border-b-4 border-indigo-600 ml-5'
                        />
                    </div>
                    <div className ="mb-5">
                        <label className ="form-label">Email : </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            disabled
                            className='border-b-4 border-indigo-600 ml-5'
                        />
                    </div>
                    <div className ="mb-5">
                        <label className ="form-label">Phone : </label>
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className='border-b-4 border-indigo-600 ml-5'
                        />
                    </div>

                    <div className ="mb-5">
                        <label className ="form-label">Address : </label>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className='border-b-4 border-indigo-600 ml-5'
                        />
                    </div>

                    <div className ="mb-5">
                        <label className ="form-label"> </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
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
