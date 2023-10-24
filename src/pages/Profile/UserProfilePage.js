import React from "react";
import ProfilePageNavbar from "../../components/navbars/ProfilePageNavbar";
import cover from "../../assets/images/cover.png";
import anmol from "../../assets/images/anmol.jpeg";
import { userData } from "../../assets/congif";
import UserEventCard from "../../components/cards/UserEventCard";
import Footer from "../../components/footer/Footer";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const UserProfilePage = () => {
  const participated = userData.participated;
  return (
    <>
      <ProfilePageNavbar />
      <div className="bg-primary ">
        <div className="h-full w-full px-40 py-10 flex flex-col items-center gap-2">
          <img src={cover} alt="banner" className="h-96 w-screen" />
          <img
            className="w-40 h-40 rounded-full mt-[-84px]"
            src={anmol}
            alt="profile-pic"
          />
          <div className="name-section  flex gap-7 items-center">
            <h1 className="text-4xl font-semibold uppercase">
              {userData.first_name + " " + userData.last_name}
            </h1>
            <h1 className="text-gray">{`(He/Him)`}</h1>
          </div>
          <h1 className="sm text-gray font">{userData.mail}</h1>
          <div className="stat-section flex gap-48 mt-10">
            <div className="flex flex-col  items-center">
              <h1 className="text-3xl">5</h1>
              <h1 className="text-gray">Event Participated</h1>
            </div>
            <div className="flex flex-col  items-center">
              <h1 className="text-3xl">2</h1>
              <h1 className="text-gray">Upcoming Event</h1>
            </div>
          </div>
          <div className="about-section mt-10">
            <h1 className="self-start font-semibold text-xl mb-2">About</h1>
            <h1 className="text-gray">{userData.about}</h1>
          </div>
          <div className="flex w-full mt-10 justify-around">
            <PrimaryButton size={'md'} content={'Change Password'} margin={'mt-6'}/>
            <PrimaryButton size={'md'} content={'Edit Profile'} margin={'mt-6'}/>

          </div>
          <div className="h-[1px] my-16 w-full bg-gray"></div>
          <div className="participated-event-section self-start">
            <h1 className="text-2xl text-black font-inter font-semibold ">
              Participated Events
            </h1>
            <div className='mt-10 flex flex-wrap justify-between gap-y-8 '>
              {participated.map((ele, i) => {
                return (
                  <UserEventCard key={i} data={ele} content={"More Info"} />
                );
              })}
            </div>
            
            
          </div>
          <div className="upcoming-event-section self-start mt-10">
            <h1 className="text-2xl text-black font-inter font-semibold ">
              Upcoming Events
            </h1>
            <div className='mt-10 flex flex-wrap justify-between gap-y-8 '>
              {participated.map((ele, i) => {
                return (
                  <UserEventCard key={i} data={ele} content={"More Info"} />
                );
              })}
            </div>
            
            
          </div>
        </div>
      <Footer />          
      </div>
    </>
  );
};

export default UserProfilePage;
