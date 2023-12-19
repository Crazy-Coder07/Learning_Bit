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
import vid1 from "../../components/images/video1.mp4"
import vid2 from "../../components/images/video2.mp4"
import vid3 from "../../components/images/video3.mp4"


import { initTE, Tab, Animate, Carousel } from "tw-elements";

const HomeInstructor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    initTE({ Tab });
    initTE({ Animate });
    initTE({ Carousel })
  }, []);

  return (
    <Layout>
      <div className='flex flex-col lg:flex-row justify-center items-start bg-slate-100 lg:mb-20'>
        <div className='flex flex-col justify-center items-center lg:w-[26%] mt-8 lg:mt-20'>
          <h1 className='font-bold text-4xl lg:text-6xl text-center lg:text-left'>Come teach with us</h1>
          <p className='text-xl w-[80%] lg:w-auto mt-3 lg:ml-0 lg:-ml-[16%] text-center lg:text-left'>
            Become an instructor and change lives — including your own
          </p>
          <button
            className='bg-black text-white h-10 w-[80%] lg:-ml-[16%] mt-5 font-bold p-2 rounded-md text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600'
            onClick={() => navigate("/applyinstructor")}
            data-te-animation-init
            data-te-animation-start="onHover"
            data-te-animation-reset="true"
            data-te-animation="[jiggle_0.5s]"
          >Apply For Teacher</button>
        </div>
        <img
          src={img1}
          alt="not found"
          className='w-full lg:w-[32%] max-h-[65%] ml-0 lg:ml-[15%] mt-6 lg:mt-0'
        />
      </div>

      <div className='flex justify-center items-center font-bold text-5xl mt-5 mb-4 lg:mt-[6%] lg:mb-[5%]'>So many reasons to start</div>

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
       
       <div className='flex flex-row justify-center mt-14 font-bold text-5xl'>Benefits of becoming an Instructor</div>
      <div className='lg:px-[16%] lg:pt-[3%] lg:pb-[6%] '>
        <div
          id="carouselExampleCaptions"
          class="relative"
          data-te-carousel-init
          data-te-ride="carousel"
        >
          <div
            class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-25"
            data-te-carousel-indicators
          >
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="0"
              data-te-carousel-active
              class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="1"
              class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="2"
              class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="relative  h-1/2 overflow-hidden after:clear-both after:block after:content-['']">

            <div
              class="carousel-item relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[2200ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-fade
              data-te-carousel-item
              data-te-carousel-active
            >
              <video autoPlay loop muted>
                <source src={vid1} type="video/mp4" />
              </video>
            </div>

            <div
              class="carousel-item relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[3300ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-fade
              data-te-carousel-item
            >
              <video autoPlay loop muted>
                <source src={vid2} type="video/mp4" />
              </video>
            </div>

            <div
              class="carousel-item relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[2000ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-fade
              data-te-carousel-item
            >
              <video autoPlay loop muted>
                <source src={vid3} type="video/mp4" />
              </video>

            </div>
          </div>

          <button
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[20%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-20 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-50 hover:outline-none focus:text-black focus:no-underline focus:opacity-30 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="prev"
          >
            <span class="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-20 w-14 hover: bg-white rounded-[50%]"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </span>
            <span class=" ![clip:rect(0,0,0,0)]"
            >
            </span>
          </button>


          <button
            class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-20 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-50 hover:outline-none focus:text-black focus:no-underline focus:opacity-30 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="next"
          >
            <span class="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-20 w-14 hover: bg-white rounded-[50%]"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <span class="![clip:rect(0,0,0,0)]"
            ></span
            >
          </button>
        </div>
      </div>


      <div className='flex flex-center justify-center font-bold text-5xl mt-5 mb-5 lg:mt-[5%] lg:mb-[4%]'>How to begin</div>

      <ul className="mb-20 flex list-none flex-row flex-wrap border-b-0 pl-0 justify-center" role="tablist" data-te-nav-ref>
        <li role="presentation">
          <a
            href="#tabs-home"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7  pb-3.5 pt-4 text-xl font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-home"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >Plan your curriculum</a>
        </li>
        <li role="presentation">
          <a
            href="#tabs-profile"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 mx-20 pb-3.5 pt-4 text-xl font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >Record your video</a>
        </li>
        <li role="presentation">
          <a
            href="#tabs-messages"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xl font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-messages"
            role="tab"
            aria-controls="tabs-messages"
            aria-selected="false"
          >Launch your course</a>
        </li>
      </ul>

      <div className="mb-6 flex flex-center justify-center">
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
          data-te-tab-active
        >
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
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
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
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-messages"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
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
            className='bg-black text-white h-10 w-[80%] ml-[6%] mt-[5%] font-bold p-2 rounded-md text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600'
            onClick={() => navigate("/applyinstructor")}
            data-te-animation-init
            data-te-animation-start="onHover"
            data-te-animation-reset="true"
            data-te-animation="[jiggle_0.5s]"
          >Apply For Teacher</button>
        </div>
      </div>
    </Layout>
  );
};

export default HomeInstructor;
