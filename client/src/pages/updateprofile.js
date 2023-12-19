import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import API from '../services/API';
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Updateprofile = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <Layout>
            
        </Layout>
    );
};

export default Updateprofile;
