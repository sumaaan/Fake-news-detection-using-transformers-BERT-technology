import robot from './assets/robot.svg';
import robot_failure from './assets/robot_failure.svg';
import robot_success from './assets/robot_success.svg';
import bg from './assets/bg2.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [isCheckItOutClicked, setisCheckItOutClicked] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [isInitial, setisInitial] = useState(true);

  const handleCheckItOutClick = (e) => {
    console.log(e);
    setisCheckItOutClicked(true);

  }
  const handleValidateClick = (e) => {
    console.log(e);
    setisInitial(false);
    // setisCheckItOutClicked(false);
    // call api to validate the data
    // response
    
    setisSuccess(true);

  }
  return (
    // Full container
    //Loading and manifesting the main background image
    <div className={`bg-indigo-600 bg-center bg-no-repeat bg-gradient-to-tr rounded-md shadow-[0_1px_20px_15px_rgba(0,0,0,0.08)]`} style={{ backgroundImage: `url(${bg})` }}>

      <div className="relative flex flex-col items-center justify-center w-screen	">
        <div className='absolute top-0 left-0 z-0'>

        </div>
        {/* Container (Elevated part) for background color */}
        <div className={`relative  bg-indigo-600 bg-center bg-no-repeat bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 rounded-md shadow-[0_1px_20px_15px_rgba(0,0,0,0.08)] m-40`} style={{ backgroundImage: `url(${bg})` }}>
          {/* Container for content */}
          <div>
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6  sm:items-baseline w-full">
              <div className="mb-2 sm:mb-0">
                <a href="" className="text-2xl no-underline text-white hover:text-blue-dark">FAKE NEWS DETECTOR</a>
              </div>
              <div>
                <div className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-full cursor-pointer'>
                  Created by: Suman Bashyal
                </div>
              </div>
            </nav>
          </div>
          <div className='grid place-items-center m-20 '>
            <div className='flex flex-col items-start'>
              {/* text */}
              {isCheckItOutClicked ? <>
                {/*  when check it out will be clicked */}
                <div className='relative ml-10'>
                  <h1 className='text-end text-white text-7xl font-bold p-2'>Let's initiate the detection</h1>
                  <h1 className='absolute -right-16 top-0 text-orange-50 text-7xl'>+</h1>
                </div></> : <>
                <div className='relative ml-10'>
                  <h1 className='text-end text-white text-7xl font-bold p-2'>UNDERSTAND FAKE</h1>
                  <h1 className='absolute -right-16 top-0 text-orange-50 text-7xl'>+</h1>
                </div></>}
              {/* image and text */}
              <div className='grid grid-cols-2 place-items-center '>
                {/* left side */}
                {isCheckItOutClicked ? <>
                  {isSuccess && !isInitial?<>
                  {/* when Initial successful */}
                    <div className='relative ml-12'>
                    <div className='absolute top-28 left-96 ml-12 flex flex-col items-center'>
                      <p className=' font-semibold -ml-8  text-green-700'>SUCCESS</p>
                      <p className=' w-72'>The fake-news-bert-base-uncased algorithm considers the given news reliable and credible.</p>
                    </div>
                    <img src={robot_success} alt='robot' className='h-4/5 pl-2 pb-5' />
                  </div></>:<>
                  {/* When validation fails */}
                  {!isSuccess && !isInitial?<>
                    <div className='relative ml-12'>
                    <div className='absolute top-28 left-96  ml-12 flex flex-col items-center'>
                      <p className=' font-semibold -ml-8 text-red-700'>FAILURE</p>
                      <p className='w-72'>The fake-news-bert-base-uncased algorithm considers the given news unreliable and misleading.</p>
                    </div>
                    <img src={robot_failure} alt='robot' className='h-4/5 pl-2 pb-5' />
                  </div></>:<>
                  <div className='relative ml-12'>
                    <div className='absolute top-28 left-96  ml-12 flex flex-col items-start'>
                      <p className=' font-semibold text-black'>Start typing...</p>
                      <p className=' '>Please start typing something to start validating.</p>
                    </div>
                    <img src={robot} alt='robot' className='h-4/5 pl-2 pb-5' />
                  </div></>}
                  </>}

                </> : <><div className='relative ml-12'>
                  <div className='absolute top-28 left-96  ml-12 flex flex-col items-start'>
                    <p className=' font-semibold'>Did you know?</p>
                    <p className=' '>"2 millions people are effected by fake news everyday."</p>
                  </div>
                  <img src={robot} alt='robot' className='h-4/5 pl-2 pb-5' />
                </div></>}
                {/* right side */}
                <div className='flex flex-col items-end'>
                  {isCheckItOutClicked ? <>
                    {/* form */}
                    <div className='flex flex-col items-center justify-center'>
                      <textarea placeholder='Start writing something...' className='rounded-md p-4' name="content-text" id="content-text" cols="60" rows="10">

                      </textarea>
                    </div>
                  </> : <>
                    <div className='flex flex-col items-end'>
                      <div className='relative'>
                        <h1 className='text-center text-white text-7xl font-bold p-2'>NEWS LIKE</h1>
                        <h1 className='absolute -top-1 -left-10 text-center text-white text-7xl font-bold p-2'>\</h1>
                      </div>
                      <h1 className='text-center text-white text-7xl font-bold p-2'>NEVER BEFORE</h1>
                    </div></>}
                  <div className='pt-20 pr-2'>
                    {/* button */}
                    {isCheckItOutClicked ? <>
                      <div className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full cursor-pointer' onClick={handleValidateClick}>
                        Validate
                      </div></> : <>
                      <div className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full cursor-pointer' onClick={handleCheckItOutClick}>
                        Let's check it out
                      </div></>}

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
