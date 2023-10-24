import React from "react";
import UserHomePageNavBar from "../../components/navbars/UserHomePageNavBar";
import banner from "../../assets/svg/banner.svg";
import { userData } from "../../assets/congif";
import UserEventCard from "../../components/cards/UserEventCard";
import Footer from "../../components/footer/Footer";

const UserHomePage = () => {
  const registered_events = userData.registered;
  const bookmarked_events = userData.registered;
  const all_events = userData.registered;

  return (
    <>
      <UserHomePageNavBar />
      <div className="bg-primary">
        <div className="h-full w-full  px-40">
          <img src={banner} alt="banner" className="h-screen w-screen" />
          <h1 className="mt-24 text-5xl text-secondary font-inter font-semibold">{`Hey ${userData?.first_name},`}</h1>
          <div className="registered-event-section self-start mt-16">
            <h1 className="text-2xl text-black font-inter font-semibold ">
              Registered Events
            </h1>
            <div className="mt-10 flex flex-wrap justify-between gap-y-8 ">
              {registered_events.map((ele, i) => {
                return (
                  <UserEventCard key={i} data={ele} content={"More Info"} />
                );
              })}
            </div>
          </div>
          <div className="bookmarked-event-section self-start mt-16">
            <h1 className="text-2xl text-black font-inter font-semibold ">
              Bookmarked Events
            </h1>
            <div className="mt-10 flex flex-wrap justify-between gap-y-8 ">
              {bookmarked_events.map((ele, i) => {
                return (
                  <UserEventCard key={i} data={ele} content={"More Info"} />
                );
              })}
            </div>
          </div>
          <div className="All-event-section self-start mt-16">
            <h1 className="text-2xl text-black font-inter font-semibold ">
              All Events
            </h1>
            <div className="mt-10 flex flex-wrap justify-between gap-y-8 ">
              {all_events.map((ele, i) => {
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

export default UserHomePage;
