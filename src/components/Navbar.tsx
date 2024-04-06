import React from 'react'
import logo from '../assets/starbucks_logo.png'

const Navbar = () => {
  return (
    <div className='font-spotify'>
        <div className='flex items-center justify-start h-20 w-full'>
            <div className='inline-block m-2'>
                <img src={logo} className='h-12 w-12'/>
            </div>
            <div className=' p-2'>
                MENU
            </div>
            <div className=' p-2'>
                REWARDS
            </div>
            <div>
                GIFT CARDS
            </div>

            <div>
                ! Find Store
            </div>

            <button> 
                Sign in
            </button>

            <button> 
                Join now
            </button>

        </div>
    </div>
  )
}

export default Navbar