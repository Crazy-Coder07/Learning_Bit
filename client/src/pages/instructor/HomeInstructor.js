import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import img1 from "../../components/images/instea.jpg";
import { useNavigate } from 'react-router-dom';
import img2 from "../../components/images/rewins.jpg"
import img3 from "../../components/images/rewin2.jpg"
import img4 from "../../components/images/rewin3.jpg"
import img5 from "../../components/images/instea1.jpg"
import img6 from "../../components/images/instea2.jpg"
import img7 from "../../components/images/instea3.jpg"

import { initTE, Tab } from "tw-elements";


const HomeInstructor = () => {
  const navigate = useNavigate();
  useEffect(() => {
    initTE({ Tab });
  }, []);

  return (

    <Layout>
      <div className='flex flex-row justify-center items-start bg-slate-100'>
        <div className='flex flex-col justify-center items-center w-[25%] mt-[8%]'>
          <h1 className='font-bold text-6xl'>Come teach with us</h1>
          <p className='text-xl w-[80%] mt-3 -ml-[16%]'>Become an instructor and change lives — including your own</p>
          <button
            className='bg-black text-white h-10 w-[80%] -ml-[16%] mt-[5%] font-bold p-2 rounded-md'
            onClick={() => navigate("/applyinstructor")}
          >
            Apply For Teacher
          </button>
        </div>
        <img
          src={img1}
          alt="not found"
          className='w-[32%] max-h-[65%] ml-[15%]'
        />
      </div>
      <div className='flex justify-center items-center font-bold text-5xl mt-[5%] mb-[4%]'>So many reasons to start</div>
      <div className='flex flex-row justify-around'>
        <div className='w-[10%]'>
          <img src={img3} alt="not found" className='w-24' />
          <p className='font-bold text-xl'>Teach your way</p>
          <div className='w-[200%]'>Publish the course you want, in the way you want, and always have control of your own content.</div>
        </div>
        <div className='w-[10%]'>
          <img src={img4} alt="not found" className='w-24' />
          <p className='font-bold text-xl'>Inspire learners</p>
          <div className='w-[200%]'>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</div>
        </div>
        <div className='w-[10%]'>
          <img src={img2} alt="not found" className='w-24' />
          <p className='font-bold text-xl'>Get rewarded</p>
          <div className='w-[200%]'>Expand your professional network, build your expertise, and earn money on each paid enrollment.</div>
        </div>
      </div>

      <div className='flex flex-center justify-center font-bold text-5xl mt-[5%] mb-[5%]'>How to begin</div>

      <ul
        class="mb-20 flex list-none flex-row flex-wrap border-b-0 pl-0 justify-center"
        role="tablist"
        data-te-nav-ref>
        <li role="presentation">
          <a
            href="#tabs-home"
            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7  pb-3.5 pt-4 text-xl font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-home"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >Plan your curriculum</a
          >
        </li>
        <li role="presentation">
          <a
            href="#tabs-profile"
            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 mx-20 pb-3.5 pt-4 text-xl font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >Record your video</a
          >
        </li>
        <li role="presentation">
          <a
            href="#tabs-messages"
            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xl font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-messages"
            role="tab"
            aria-controls="tabs-messages"
            aria-selected="false"
          >Launch your course</a
          >
        </li>
      </ul>

      <div class="mb-6 flex flex-center justify-center">
        <div
          class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
          data-te-tab-active>
          <div className='flex flex-row justify-center items-start'>
            <div className='w-[26%] text-xl'>
              <div>
                You start with your passion and knowledge.
                Then choose a promising topic with the help of our Marketplace Insights tool.
              </div>
              <div className='my-2'>
                The way that you teach — what you bring to it — is up to you.
              </div>
              <h1 className='font-bold my-4'>How we help you ?</h1>
              <div>
                We offer plenty of resources on how to create your first course.
                And, our instructor dashboard and curriculum pages help keep you organized.
              </div>
            </div>
            <img src={img5} alt="not found" className='w-[26%] max-h-[35%]' />
          </div>
        </div>
        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab">
          <div className='flex flex-row justify-center items-start'>
            <div className='w-[26%] text-xl'>
              <div>
                Use basic tools like a smartphone or a DSLR camera.
                Add a good microphone and you’re ready to start.
              </div>
              <div className='my-2'>
                If you don’t like being on camera, just capture your screen.
                Either way, we recommend two hours or more of video for a paid course.
              </div>
              <h1 className='font-bold my-4'>How we help you ?</h1>
              <div>
                Our support team is available to help you throughout
                the process and provide feedback on test videos.
              </div>
            </div>
            <img src={img6} alt="not found" className='w-[26%] max-h-[35%]' />
          </div>
        </div>
        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-messages"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab">
          <div className='flex flex-row justify-center items-start'>
            <div className='w-[26%] text-xl'>
              <div>
                Gather your first ratings and reviews by promoting
                your course through social media and your professional networks.
              </div>
              <div className='my-2'>
                Your course will be discoverable in our marketplace
                where you earn revenue from each paid enrollment.
              </div>
              <h1 className='font-bold my-4'>How we help you ?</h1>
              <div>
                Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses.
                There’s even more opportunity for courses chosen for Udemy Business.
              </div>
            </div>
            <img src={img7} alt="not found" className='w-[26%] max-h-[35%]' />
          </div>
        </div>
      </div>
      <div className='flex flex-center justify-center bg-slate-100 items-center py-16'>
        <div>
          <div className='font-bold text-5xl'>Become an instructor today</div>
          <div className='text-xl mt-6 ml-14'>Join LearningBit an online learning marketplaces.</div>
          <button
            className='bg-black text-white h-10 w-[80%] ml-[6%] mt-[5%] font-bold p-2 rounded-md'
            onClick={() => navigate("/applyinstructor")}
          >
            Apply For Teacher
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default HomeInstructor;
