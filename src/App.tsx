import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className=''>
      <Navbar />
      <div className='flex items-center h-12 bg-dark-green stick'>
            <div className='pl-[10%]'>
              STARBUCKS® REWARDS
            </div>
        </div>
    </div>
  );
}

export default App;
