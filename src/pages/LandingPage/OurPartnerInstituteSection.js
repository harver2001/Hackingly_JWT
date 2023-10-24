import iit from "../../assets/images/iit.png";
import partner from '../../assets/svg/partner.svg'
const OurPartnerInstituteSection = () => {
  return (
    <div className="services-section mt-24">
      <h1 className="text-3xl text-black font-inter font-semibold">
        Our Partner Institutes
      </h1>
      <div className="flex mt-10 ">
      <div>
          <img
            className="w-[400px] h-[400px]"
            src={partner}
            alt="partner"
          />
        </div>
        <div className="w-[780px] h-[348px] bg-tertiary rounded-3xl grid grid-cols-3">
          {Array(6)
            .fill(0)
            .map((ele, i) => {
              return (
                <div key={i} className="flex justify-center items-center">
                  <img
                    className="w-[100px] h-[100px]"
                    src={iit}
                    alt="client-logo"
                  />
                </div>
              );
            })}
        </div>
        
      </div>
    </div>
  );
};

export default OurPartnerInstituteSection;
