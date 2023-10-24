import React from 'react'
import { eventData } from "../../assets/congif";
import EventLandingCard from "../../components/cards/EventLandingCard";
import PrimaryButton from '../../components/buttons/PrimaryButton';

const EventsSection = () => {
  return (
    <div className="events-section mt-24">
          <h1 className="text-3xl text-black font-inter font-semibold">
            Upcoming Initiatives
          </h1>
          <div className="flex flex-col ">
            {eventData.map((ele, i) => {
              return <EventLandingCard data={ele} key={i}/>;
            })}
          </div>
          <div className="flex justify-center">
          <PrimaryButton size={'sm'} content={'View All'} margin={'mt-6'}/>
          </div>
        </div>
  )
}

export default EventsSection
