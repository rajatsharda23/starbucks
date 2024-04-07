import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import bkg_star from './assets/hero/NEW_HERO.png'

function App() {
  return (
    <div className='font-spotify relative'>
      <Navbar />
      <div className=''>
        <div className='flex items-center h-12 bg-dark-green sticky top-0 z-50'>
              <div className='pl-[10%] text-white'>
                STARBUCKS® REWARDS
              </div>
        </div>

        <div className='flex flex-row justify-evenly bg-light-green w-screen'>
          <div className='flex w-[80%] p-8'>
            
          <div className='m-4 p-4 flex items-center justify-start w-full'>
            <div className='flex flex-col w-full'>
              <div className='text-4xl m-2'>
                FREE COFFEE <br />
                IS A TAP AWAY
              </div>
              <div className='text-xl font-SpotifyLight m-2'>
                Join now to start earning Rewards.
              </div>
              <div className='pt-4 '>
                <button className='bg-green text-white border font-SpotifyLight border-green rounded-full px-3 py-1'>  
                  Join now
                </button>
              </div>
              <div className='text-xl font-SpotifyLight m-2 py-2'>
                  Or <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="underline">join in the app</a> for the best experience
              </div>

            </div>
          </div>

          </div>

          <div className=' flex flex-col-reverse relative'>
            <img src={bkg_star} className=''/>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default App;
