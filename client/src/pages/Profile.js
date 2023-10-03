import React from 'react'
import Layout from '../components/Layout/Layout'
import { useSelector } from "react-redux";


const Profile = () => {

    const { user, token } = useSelector((state) => state.auth);

    return (
        <Layout>
            <div>{user}</div>
            <div>{token}</div>
        </Layout>
    )
}

export default Profile