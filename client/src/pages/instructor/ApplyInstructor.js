import Layout from '../../components/Layout/Layout';
import React, { useState } from 'react';
import API from '../../services/API';
import toast from "react-hot-toast";

const ApplyInstructor = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [bio, setBio] = useState("");
    const [subjects, setSubjects] = useState("");
    const [experience, setExperience] = useState("");
    const [qualifications, setQualifications] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/instructor/becomeinstructor', { name, email, phone, address, bio, subjects, experience, qualifications });
            if (data.success) {
                toast.success(data.message);
                window.location.replace("/instructor");

                setName("")
                setEmail("")
                setPhone("")
                setAddress("")
                setBio("")
                setSubjects("")
                setExperience("")
                setQualifications("")
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error(error.message)
            }
        }
    };

    return (
        <Layout>
            <div className=' bg-red-100'>
                <div className="max-w-md mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-center pt-10">Fill the instructor form</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 bg-white py-8 px-5 rounded">
                            <label htmlFor="name" className="block text-sm font-semibold mb-3">
                                Name:
                            </label>
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
                        <div className="mb-4 bg-white py-8 px-5 rounded">
                            <label htmlFor="email" className="block text-sm font-semibold mb-3">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4 bg-white py-8 px-5 rounded">
                            <label htmlFor="phone" className="block text-sm font-semibold mb-3">
                                Phone:
                            </label>
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
                        <div className="mb-4 bg-white py-8 px-5 rounded">
                            <label htmlFor="address" className="block text-sm font-semibold mb-3">
                                Address:
                            </label>
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
                        <div className="mb-4 bg-white py-8 px-5 rounded">
                            <label htmlFor="bio" className="block text-sm font-semibold mb-3">
                                Bio:
                            </label>
                            <input
                                id="bio"
                                name="bio"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none"
                                placeholder="Tell us about yourself"
                                required
                            />
                        </div>
                        <div className="mb-4 bg-white py-8 px-5 rounded">
                            <label htmlFor="subjects" className="block text-sm font-semibold mb-3">
                                Subjects of Interest:
                            </label>
                            <input
                                type="text"
                                id="subjects"
                                name="subjects"
                                value={subjects}
                                onChange={(e) => setSubjects(e.target.value)}
                                className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none"
                                placeholder="Enter your subjects of interest"
                                required
                            />
                        </div>
                        <div className="mb-4 bg-white py-8 px-5 rounded">
                            <label htmlFor="experience" className="block text-sm font-semibold mb-3">
                                Experience in years:
                            </label>
                            <input
                                type="text"
                                id="experience"
                                name="experience"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none"
                                placeholder="Enter your experience"
                                required
                            />
                        </div>
                        <div className="mb-4 bg-white py-8 px-5 rounded">
                            <label htmlFor="qualifications" className="block text-sm font-semibold mb-3">
                                Highest Qualifications:
                            </label>
                            <input
                                type="text"
                                id="qualifications"
                                name="qualifications"
                                value={qualifications}
                                onChange={(e) => setQualifications(e.target.value)}
                                className="w-full border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none"
                                placeholder="Enter your qualifications"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-8"
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

export default ApplyInstructor;
