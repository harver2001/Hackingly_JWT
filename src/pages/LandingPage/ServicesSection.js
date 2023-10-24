import { servicesData } from "../../assets/congif";
import ServiceSectionCard from "../../components/cards/ServiceSectionCard";
const ServicesSection = () => {
  return (
    <div className="services-section mt-24">
      <h1 className="text-3xl text-black font-inter font-semibold">
        Our Services
      </h1>
      <div className="service-container flex gap-4">
      {servicesData.map((ele,i)=>{
        return <ServiceSectionCard data={ele} key={i}/>
      })}
      </div>
    </div>
  );
};

export default ServicesSection;
