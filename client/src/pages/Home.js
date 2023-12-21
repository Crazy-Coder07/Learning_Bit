import React from 'react';
import Layout from '../components/Layout/Layout';
import { useSelector } from 'react-redux';

const Home = () => {

  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div>
        {user?user.name:"not logged in"}
      </div>
    </Layout>
  );
}

export default Home;
