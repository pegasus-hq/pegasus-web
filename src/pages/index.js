import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/green.svg";
import Image2 from "../images/resume.svg";
import Image3 from "../images/verify-work.svg"
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image3}
        id="about"
        // subtitle=""
        title="Pegasus"
        text="We all use LinkedIn to display our professional and academic work. But why should you believe what you see? 
        Nothing stops you from adding any experience you please on your profile, and this is a breeding ground for misinformation. 
        Pegasus verifies all of this, giving you a more meaningful platform to engage with others, through personal NFTs that 
        represent your work in a richer way, and drive effective collaboration. Why should you spend time and money to track all your work and summarize it into
        a resume that isn't even verified by anyone? We also generate verified resumes for you dynamically, that you can download with the click of a button!"
        btnText="Join Waitlist"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Morbi iaculis enim"
        title="In hac habitasse"
        text="Phasellus porta sagittis sapien. Nam quis odio eu libero tempus rutrum. Suspendisse nec eros eget ex cursus rhoncus. Proin at velit quis ante pretium porta. Quisque pulvinar, elit et tincidunt ultricies, mauris odio luctus risus, vitae auctor elit risus a tortor. Nunc pulvinar purus id est rutrum vulputate. Mauris venenatis lectus vel nisi semper scelerisque."
        btnText="Explore"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="#"
        // subtitle=""
        title="Carbon Neutral"
        text="The technology we use to make your credentials, your NFTs, and to verify your work is 100% emission free!"
        btnText="Read more"
      />
      <Footer />
    </>
  );
};