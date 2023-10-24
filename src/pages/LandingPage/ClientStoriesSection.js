import ClientStoriesCard from "../../components/cards/ClientStoriesCard"
import anmol from '../..//assets/images/anmol.jpeg'

const data = [
  {
    content : '“Hackingly has opened a new path for my career, I am thankful to hackingly for conducting this boot camp. I believe RPA would play a major role in automating daily tedious tasks.  I am thankful to UiPath and hackingly for conducting this boot camp!”',
    img: anmol,
    name: 'Anmol Garg',
    pos : 'Backend Developer',
    company : 'at Hackingly'  
  },{
    content : '“Hackingly has opened a new path for my career, I am thankful to hackingly for conducting this boot camp. I believe RPA would play a major role in automating daily tedious tasks.  I am thankful to UiPath and hackingly for conducting this boot camp!”',
    img: anmol,
    name: 'Anmol Garg',
    pos : 'Backend Developer',
    company : 'at Hackingly'  
  },{
    content : '“Hackingly has opened a new path for my career, I am thankful to hackingly for conducting this boot camp. I believe RPA would play a major role in automating daily tedious tasks.  I am thankful to UiPath and hackingly for conducting this boot camp!”',
    img: anmol,
    name: 'Anmol Garg',
    pos : 'Backend Developer',
    company : 'at Hackingly'  
  }
]

const ClientStoriesSection = () => {
  return (
    <div className="services-section mt-24">
      <h1 className="text-3xl text-black font-inter font-semibold">
      Testimonials
      </h1>
      <div className='mt-10 flex justify-between'>
       {data.map((ele,i)=>{
        return <ClientStoriesCard key={i} content={ele.content} img={ele.img} name={ele.name} position={ele.pos} company={ele.company}/>
       })}
      </div>
    </div>
  )
}

export default ClientStoriesSection
