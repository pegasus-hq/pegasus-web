import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/certificate.svg"
import Icon2 from "../../images/verified-resume.svg"
import Icon3 from "../../images/visualize.svg"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Verified Credentials</ServicesH2>
          <ServicesP>
            Get verifiable proof and non-tradeable NFTs for your work
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Portfolio Generation</ServicesH2>
          <ServicesP>
            Download your verified portfolios with the click of a button
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Social Networking</ServicesH2>
          <ServicesP>
            Engage and connect in a richer way, with only reliable information
          </ServicesP>
        </ServicesCard>
        {/* <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Claim Verification</ServicesH2>
          <ServicesP>
            Validate claims made by anyone regarding their work
          </ServicesP>
        </ServicesCard> */}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;