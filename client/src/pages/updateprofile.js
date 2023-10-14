import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import API from '../services/API';
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Updateprofile = () => {
    const { user } = useSelector((state) => state.auth);
    // const user = JSON.parse(user);

    const [name, setName] = useState(user.name || "");
    const [phone, setPhone] = useState(user.phone || "");
    const [address, setAddress] = useState(user.address || "");
    const [photo, setPhoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("phone", phone);
            formData.append("address", address);
            if (photo) {
                formData.append("photo", photo);
            }

            const { data } = await API.put('/auth/profile-updateprofile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (data.success) {
                toast.success(data.message);
                window.location.replace("/profile");
                setName("");
                setPhone("");
                setAddress("");
                setPhoto(null);
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error(error.message);
            }
        }
    };

    return (
        <Layout>
            <div className=' bg-emerald-200'>
                <div className="max-w-md mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-center pt-10">Update Your Own Profile</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 bg-white py-8 px-5 rounded-lg">
                            <label htmlFor="name" className="block text-sm font-semibold mb-3">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4 bg-white py-8 px-5 rounded-lg">
                            <label htmlFor="email" className="block text-sm font-semibold mb-3">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={user.email}
                                className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none"
                                disabled
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4 bg-white py-8 px-5 rounded-lg">
                            <label htmlFor="phone" className="block text-sm font-semibold mb-3">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="mb-4 bg-white py-8 px-5 rounded-lg">
                            <label htmlFor="address" className="block text-sm font-semibold mb-3">Address:</label>
                            <input
                                id="address"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none"
                                placeholder="Enter your address"
                                required
                            />
                        </div>
                        {/* <div className="mb-4 bg-white py-8 px-5 rounded-lg">
                            <label htmlFor="photo" className="block text-sm font-semibold mb-3">Photo:</label>
                            <input
                                id="photo"
                                name="photo"
                                type="file"
                                onChange={(e) => setPhoto(e.target.files[0])}
                                className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div> */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-8"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Updateprofile;
