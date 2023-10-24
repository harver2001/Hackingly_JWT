import FaqComponent from "./FaqComponent"

const data = [
    {
        question:'What is the motivation behind a Hackathon?',
        ans: 'No, hackathons are available to members with different abilities. While coding is a typical component, hackathons likewise welcome fashioners, project directors, and people with different gifts to contribute.',
    }, {
        question:'What is the motivation behind a Hackathon?',
        ans: 'No, hackathons are available to members with different abilities. While coding is a typical component, hackathons likewise welcome fashioners, project directors, and people with different gifts to contribute.',
    }, {
        question:'What is the motivation behind a Hackathon?',
        ans: 'No, hackathons are available to members with different abilities. While coding is a typical component, hackathons likewise welcome fashioners, project directors, and people with different gifts to contribute.',
    }, {
        question:'What is the motivation behind a Hackathon?',
        ans: 'No, hackathons are available to members with different abilities. While coding is a typical component, hackathons likewise welcome fashioners, project directors, and people with different gifts to contribute.',
    }
]

const FaqSection = () => {
  return (
    <div className="services-section mt-24">
      <h1 className="text-3xl text-black font-inter font-semibold">
        FAQ
      </h1>
      <div className='mt-10 flex flex-col gap-4'>
       {data.map((ele,i)=>{
          return <FaqComponent key={i} id={i} ques={ele.question} ans={ele.ans}/>
       })} 
      </div>
    </div>
  )
}

export default FaqSection
