import quote from '../../assets/images/quote.png'

function ClientStoriesCard({content,img,name,position,company}) {
  return (
    <div className='w-[300px] h-[350px] flex flex-col bg-white rounded-[40px] p-4 hover:scale-110 transform transition-transform duration-300 ease-in-out'>
      <img  className='w-8 h-6' src={quote} alt='quote'/> 
      <h1 className='mt-4'>{content}</h1>
      <div  className='flex mt-4'>
       <img className='w-10 h-10 rounded-full' src={img} alt='user'/>
       <div className='felx flex-col ml-2'>
        <h1 className='text-base font-semibold'>{name}</h1>
        <h2 className='text-xs'>{position+company}</h2>
       </div>
    </div> 
    </div>
  )
}

export default ClientStoriesCard