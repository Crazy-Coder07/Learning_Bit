import React from 'react';
import Layout from '../components/Layout/Layout';
import prevacy from "../components/images/privacy.jpg";

const Privacy = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <img src={prevacy} alt="Privacy" />
        <div className='text-center mt-4'>
          We prioritize your privacy. When using our learning platform, we collect essential personal and
          usage information solely to enhance your learning experience. Rest assured, we never sell your data to third parties.
          Your information is only shared when necessary for service delivery or legal compliance.
          We employ stringent security measures to protect your data, and you have full control over access, updates, and marketing preferences.
          Our privacy policy may be updated periodically, so we encourage you to check for any changes. If you have any questions or concerns, please don't hesitate to reach out to us at: adityaranjan2515@gmail.com.
          Your privacy matters to us, and we're committed to safeguarding your data.
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
