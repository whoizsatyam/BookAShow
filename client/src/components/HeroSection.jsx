import { ArrowRight, CalendarIcon, Clock, ClockIcon } from 'lucide-react'
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/doom.jpg")] bg-cover bg-center h-screen'>
        
        <img src={assets.marvelLogo} alt="" />
        <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Avengers: <br/> Doomsday</h1>
        
        <div className='flex items-center gap-4 text-gray-300'>
            <span>Action | Sci-Fi</span>
            <div className='flex items-center gap-1'>
                <CalendarIcon className='w-4.5 h-4.5' /> 18 / 12 / 2026
            </div>
            <div className='flex items-center gap-1'>
                <ClockIcon className='w-4.5 h-4.5' /> 2h 45m
            </div>
        </div>

        <p className='max-w-md text-gray-300'>
        The Avengers join forces with the Fantastic Four, the Thunderbolts and Earth's other mightiest superheroes to save the multiverse from the evil Doctor Doom.
        </p>

        <button onClick={()=>navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
            Explore Movies 
            <ArrowRight className='w-5 h-5'/>
        </button>

    </div>
  )
}

export default HeroSection
