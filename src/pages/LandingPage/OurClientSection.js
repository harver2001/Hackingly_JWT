import client from "../../assets/svg/client.svg";
import google from "../../assets/images/google.png";

const OurClientSection = () => {
  return (
    <div className="services-section mt-24">
      <h1 className="text-3xl text-black font-inter font-semibold">
        Our Clients
      </h1>
      <div className="flex mt-10 ">
        <div className="w-[780px] h-[348px] bg-tertiary rounded-3xl grid grid-cols-3">
          {Array(6)
            .fill(0)
            .map((ele, i) => {
              return (
                <div key={i} className="flex justify-center items-center">
                  <img
                    className="w-[200px] h-[150px]"
                    src={google}
                    alt="client-logo"
                  />
                </div>
              );
            })}
        </div>
        <div>
          <img
            className="w-[400px] h-[360px] ml-[-50px]"
            src={client}
            alt="client"
          />
        </div>
      </div>
    </div>
  );
};

export default OurClientSection;
