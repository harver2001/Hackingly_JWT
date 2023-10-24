import React from 'react'
import PrimaryButton from '../../components/buttons/PrimaryButton'

const LearnWithUsSection = () => {
  return (
    <div className='mt-24 bg-white h-52 rounded-3xl flex justify-center items-center'>
        <div className='flex flex-col gap-6 items-center'>
            <h1 className='text-2xl font-semibold'>Learn with us , we are the strength for that each 1st of your CAREER</h1>
            <PrimaryButton size={'md'} content={'Join Now'}/>
        </div>
    </div>
  )
}

export default LearnWithUsSection
