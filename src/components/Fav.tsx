import React from 'react'
import { RootState } from '../redux/store'
import { changeState } from '../redux/slices/selectStar'
import { useDispatch, useSelector } from 'react-redux'
import FavBody from './FavBody'
import logo_25 from '../assets/reward-tiers/25.png'
import logo_100 from '../assets/reward-tiers/100.png'
import logo_200 from '../assets/reward-tiers/200.png'
import logo_300 from '../assets/reward-tiers/300.png'
import logo_400 from '../assets/reward-tiers/400.png'

const Fav = () => {
    const selectedStar = useSelector((state: RootState) => state.Stars.value)
    const dispatch = useDispatch();

    interface favBod {
        img : string[],
        title : string[],
        body : string[]
    }

    const favBody: favBod = {
        img: [logo_25, logo_100, logo_200, logo_300, logo_400],
        title: [
            'Customize your drink',
            'Brewed hot or iced coffee or tea, bakery item, packaged snack and more',
            'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast',
            'Sandwich, protein box or at-home coffee',
            'Select Starbucks® merchandise'
        ],
        body : [
            'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.',
            'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.',
            'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.',
            'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.',
            'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.'
        ]
    }

    const element = () => {
        const mapping = [25, 100, 200, 300, 400]
        const index = mapping.indexOf(selectedStar)
        return index !== -1 ? index : 0
    };
    

    const calculateLinePosition = () => {
        switch (selectedStar) {
            case 25:
                return '0%'
            case 100:
                return '19%'
            case 200:
                return '39%'
            case 300:
                return '60%'
            case 400:
                return '81%'
            default:
                return '0%'
        }
    };

    return (
        <div className='h-screen w-screen'>
            <div className='flex flex-col bg-lighter-green justify-center items-center'>
                <div className='text-3xl my-8'>
                    Get your favorites for free
                </div>

                <div className='flex flex-row justify-center text-2xl h-24 relative'>
                    <div
                        className='absolute h-1 bg-green bottom-0 left-0 transition-all duration-500 ease-in-out'
                        style={{
                            width: '15%',
                            left: calculateLinePosition(),
                        }}
                    />
                    <div className='relative flex justify-center items-center pt-4 px-5'>
                        <button onClick={() => dispatch(changeState(25))}>
                            25<a className='text-amber-500 pt-2'>★</a>
                        </button>
                    </div>

                    <div className='relative flex justify-center items-center pt-4 px-5'>
                        <button onClick={() => dispatch(changeState(100))}>
                            100<a className='text-amber-500 pt-2'>★</a>
                        </button>
                    </div>

                    <div className='relative flex justify-center items-center pt-4 px-5'>
                        <button onClick={() => dispatch(changeState(200))}>
                            200<a className='text-amber-500 pt-2'>★</a>
                        </button>
                    </div>

                    <div className='relative flex justify-center items-center pt-4 px-5'>
                        <button onClick={() => dispatch(changeState(300))}>
                            300<a className='text-amber-500 pt-2'>★</a>
                        </button>
                    </div>

                    <div className='relative flex justify-center items-center pt-4 px-5'>
                        <button onClick={() => dispatch(changeState(400))}>
                            400<a className='text-amber-500 pt-2'>★</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center bg-light-green transition-all duration-500 ease-in-out'>
                <FavBody favBody={favBody} ele={element()}/>
            </div>

        </div>
    )
}

export default Fav;
