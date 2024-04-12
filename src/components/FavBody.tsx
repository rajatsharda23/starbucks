import React, { useState, useEffect } from 'react';

const FavBody: React.FC<any> = ({ favBody, ele }) => {
    const [currentIndex, setCurrentIndex] = useState(ele);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        setOpacity(0);
        const timeoutId = setTimeout(() => {
            setCurrentIndex(ele)
            setOpacity(1);
        }, 150)

        return () => clearTimeout(timeoutId);
    }, [ele]);

    return (
        <div className={`flex flex-row items-center justify-center h-72 transition-opacity duration-500`} style={{ opacity }}>
            <div className='inline-block px-8'>
                <img src={favBody.img[currentIndex]} className='h-48' alt='FavBody Image' />
            </div>

            <div className='w-[35%] flex flex-col items-start'>
                
                <div className='text-2xl py-4'>
                    {favBody.title[currentIndex]}
                </div>

                <div className='font-SpotifyLight flex justify-start py-4'>
                    {favBody.body[currentIndex]}
                </div>

            </div>
            
        </div>
    );
};

export default FavBody;
