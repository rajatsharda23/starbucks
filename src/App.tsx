import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import bkg_star from './assets/hero/NEW_HERO.png'
import one from './assets/getting-started/1.jpeg'
import two from './assets/getting-started/2.jpeg'
import three from './assets/getting-started/3.jpeg'
import Fav from './components/Fav'

function App() {
  return (
    <div className='font-spotify relative'>
      <Navbar />

      <div className='flex items-center h-12 bg-dark-green sticky top-0 z-50'>
              <div className='pl-[10%] text-white'>
                STARBUCKS® REWARDS
              </div>
      </div>

      <div>
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

      <div className='flex flex-col m-32'>
        
        <div className='flex flex-col justify-center items-center'>
          <div className='text-3xl my-4'>
            Getting started is easy
          </div>
          <div className='font-SpotifyLight'>
            Earn Stars and get rewarded in a few easy steps.
          </div>
        </div>

        <div className='flex flex-row justify-center space-x-12 '>

          <div className='flex flex-col  items-center'>
            <div className=' my-6'>
              <img src={one} alt='ONE' className='h-12' />
            </div>

            <div className='my-2 py-2 text-xl'>
            Create an account
            </div>

            <div className='font-SpotifyLight text-center'>
            To get started, <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="underline text-green">join now</a>.
            You can also <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="underline text-green">join in the app</a>  to get access to the full range of Starbucks®
            Rewards benefits.
            </div>

          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className=' my-6'>
              <img src={two} alt='TWO' className='h-12' />
            </div>

            <div className='my-2 py-2 text-xl'>
            Order and pay how you’d like
            </div>

            <div className='font-SpotifyLight text-center'>
            Use cash, credit/debit card or save some time
            and pay right through the app.
            You’ll collect Stars
            all ways. <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="underline text-green">Learn how</a>
            </div>
            
          </div>

          <div className='flex flex-col  items-center'>
            <div className=' my-6'>
              <img src={three} alt='THREE' className='h-12' />
            </div>

            <div className='my-2 py-2 text-xl'>
            Earn Stars, get Rewards
            </div>

            <div className='font-SpotifyLight text-center inline-block'>
            As you earn Stars, you can redeem them for 
            Rewards—like free food, drinks, and more. Start 
            redeeming with as little as 25 Stars!
            </div>

          </div>

        </div>

      </div>

      <Fav />

    </div>
  )
}

export default App;
