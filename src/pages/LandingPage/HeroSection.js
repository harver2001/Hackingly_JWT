import hero from "../../assets/svg/hero.svg";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const HeroSection = () => {
  return (
      <div className=" hero-section grid grid-cols-2">
          <div className="mt-10">
            <p className="text-[30px] text-black font-inter font-semibold">
              Connecting YOU to the
            </p>
            <p className="text-[60px] text-black font-inter font-semibold">
              YOUR DREAM CAREER
            </p>
            <p className="w-[500px]">
              Explore your dream future by hacking with hackingly. The one stop
              solution for your all career concern from your 1st to your dream
              job, Hackingly hai naa !!!
            </p>

          <Link to={'user'}>
          <PrimaryButton size={'lg'} content={'Explore Hackathon'} margin={'mt-6'}/>
          </Link>
           <button className="w-[345px] block h-12 bg-primary  mt-6 border-2 border-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-black font-semibold rounded-[15px] px-4 py-2 transition-transform transform active:scale-95">
              Organise Hackathon
            </button>
          </div>
          <img src={hero} className="mt-12 p-6" alt="hero-img" />
        </div>
  )
}

export default HeroSection
