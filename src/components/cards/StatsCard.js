import React from 'react'

const StatsCard = ({img,number,title}) => {
  return (
    <div className='flex'>
        <img className='w-[160px] h-[120px]' src={img} alt='logo'/>
        <div className='flex flex-col items-center'>
        <div className='text-4xl font-semibold '>{number}</div>
        <div className='flex flex-col justify-center items-center mt-4'>
        <div className='text-2xl text-gray font-semibold'>{title[0]}</div>
        <div className='text-2xl text-gray font-semibold'>{title[1]}</div>
        </div>
        </div>
      
    </div>
  )
}

export default StatsCard
