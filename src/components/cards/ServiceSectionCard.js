import rocket from '../../assets/images/rocket.png'
import cup from '../../assets/images/cup.png'
import comp from '../../assets/images/comp.png'
import job from '../../assets/images/jobs.png'

const ServiceSectionCard = ({data}) => {
  let img;
  if(data.id==1){
    img = comp
  }else if(data.id==2){
    img=rocket
  }else if(data.id==3){
    img=job
  }else{
    img = cup
  }
  return (
    <div className='w-[265px] h-[275px] mt-16 border-4 border-secondary rounded-[20px] px-4 py-2 flex flex-col items-center hover:scale-110 transform transition-transform duration-300 ease-in-out'>
      <div className='w-[80px] h-[80px] bg-secondary rounded-full mt-[-60px] flex justify-center items-center p-6'>
        <img  src={img} alt='icons'/>
      </div>
      <h1 className='mt-4 text-secondary text-xl font-semibold text-center'>{data.title}</h1>
      <h3 className='text-sm mt-6 text-center text-gray-500'>{data.desc}</h3>
      <a className='mt-auto text-secondary hover:text-black font-semibold' href={data.url}>Learn More</a>
    </div>
  )
}

export default ServiceSectionCard
