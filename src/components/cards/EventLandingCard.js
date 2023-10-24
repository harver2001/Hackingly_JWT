import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";

const EventLandingCard = ({ data }) => {
  return (
    <div className="flex justify-between mt-8 p-4 bg-white rounded-[20px] hover:scale-110 transform transition-transform duration-300 ease-in-out">
      <img
        className="w-[300px] h-[250px] rounded-md"
        src={data.image}
        alt="event-img"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-inter font-semibold uppercase">
          {data.title}
        </h1>
        <h2 className="mt-4 w-64 min-w-[600px]">{data.desc}</h2>
        <h3 className="self-start mt-4">{`mode : ${data.mode}`}</h3>
        <h4 className="self-start mt-2">{`fee : ${data.fee}`}</h4>
        <Link to={"/user"}>
          <PrimaryButton size={'md'} content={'Register Now'} margin={'mt-6'}/>
        </Link>
      </div>
      <div className="bg-secondary w-36 rounded-r-[20px] m-[-16px] flex items-center justify-center">
        <h1 className="text-white">{data.date}</h1>
      </div>
    </div>
  );
};

export default EventLandingCard;
