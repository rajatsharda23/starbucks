import React from 'react'
import logo from '../assets/starbucks_logo.png'
import pin from '../assets/comps/pin_map.svg'

const Navbar = () => {
  return (
    <div className='font-spotify flex justify-center mr-2 ml-2'>
        <div className='flex items-center justify-start h-24 w-full relative'>
            <div className='inline-block m-2'>
                <img src={logo} className='h-12 w-12 object-contain' alt='Logo'/>
            </div>
            
            <div className='p-2 ml-2 mr-2'>
                MENU
            </div>

            <div className='relative'>
                    <div className='bg-white w-full flex justify-center pt-7 pb-7'>
                        REWARDS
                    </div>
                    <div className='absolute w-full h-2 bg-green'></div>
            </div>

            <div className='p-2 ml-2 mr-16'>
                GIFT CARDS
            </div>
        
            <div className='flex flex-row absolute right-12 font-SpotifyLight text-sm'>
                <div className='flex flex-row pr-24 items-center'>
                    <img src={pin} className='ml-1 mr-1 '/> Find a Store
                </div>

                <button className='m-2 pt-1 pb-1 pr-3 pl-3 rounded-full border border-black' onClick={()=>window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"}> 
                    Sign in
                </button>
            
                <button className='m-2 pt-1 pb-1 pr-3 pl-3 rounded-full border text-white bg-black border-black' onClick={()=>window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"}> 
                    Join now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar