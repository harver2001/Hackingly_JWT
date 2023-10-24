import StatsCard from "../../components/cards/StatsCard";
import dev from "../../assets/svg/communtiy.svg";
import hackathon from "../../assets/svg/conducted.svg";
import idea from "../../assets/svg/idea.svg";

const StatsSection = () => {
  return (
    <div className="services-section mt-24">
      <h1 className="text-3xl text-black font-inter font-semibold">
        We leave a lasting impression !
      </h1>
      <div className="flex mt-10 justify-between">
        <StatsCard
          img={dev}
          number={"50,000+"}
          title={["Developers", "associated"]}
        />
        <StatsCard
          img={hackathon}
          number={"500+"}
          title={["Hackathons", "and bootcamps "]}
        />
        <StatsCard
          img={idea}
          number={"50+"}
          title={["Ideas", "funded"]}
        />
      </div>
    </div>
  );
};

export default StatsSection;
