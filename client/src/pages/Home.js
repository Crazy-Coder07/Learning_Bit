import React from 'react';
import Layout from '../components/Layout/Layout';
import { useSelector } from 'react-redux';

const Home = () => {

  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div>
        {user.name}
      </div>
    </Layout>
  );
}

export default Home;
