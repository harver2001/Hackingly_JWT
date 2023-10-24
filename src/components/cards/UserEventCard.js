import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'

const UserEventCard = ({data, content}) => {
  return (
    <div className='flex flex-col w-[300px] h-fit'>
      <img className='w-[300px] h-[200px] rounded-t-[40px]' src={data.image} alt='icon'/>
      <div className='bg-white p-4 flex flex-col items-center rounded-b-[40px]'>
        <h1 className='text-black text-xl font-semibold'>{data.title}</h1>
        <h1 className='mt-4 self-start'>{`Event Date : ${data.date}`}</h1>
        <h1 className='self-start'>{`Time : ${data.time}`}</h1>
        <h1 className='self-start'>{`Mode : ${data.mode}`}</h1>
        {/* <button className="w-[250px] mt-4 block h-10 bg-secondary hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-semibold rounded-[15px] px-4 py-2 transition-transform transform active:scale-95">
             {content}
        </button> */}
        <PrimaryButton size={'md'} content={content} margin={'mt-4'}/>
      </div>
    </div>
  )
}

export default UserEventCard
