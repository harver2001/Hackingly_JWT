import React from "react";
import LandingPageNavBar from "../../components/navbars/LandingPageNavbar";
import EventsSection from "./EventsSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import OurClientSection from "./OurClientSection";
import OurPartnerInstituteSection from "./OurPartnerInstituteSection";
import StatsSection from "./StatsSection";
import LearnWithUsSection from "./LearnWithUsSection";
import ClientStoriesSection from "./ClientStoriesSection";
import OurGallerySection from "./OurGallerySection";
import FaqSection from "./FaqSection";
import Footer from "../../components/footer/Footer";
import RequestDemoButton from "./RequestDemoButton";

const LandingPage = () => {
  return (
    <>
    
      <RequestDemoButton />
      <LandingPageNavBar />
      <div className="bg-primary">
        <div className="h-full w-full  px-40">
          <HeroSection />
          <EventsSection />
          <ServicesSection />
          <OurClientSection />
          <OurPartnerInstituteSection />
          <StatsSection />
          <LearnWithUsSection />
          <ClientStoriesSection />
          <OurGallerySection />
          <FaqSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
