import React, { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { ButtonR } from "../ButtonElements";
import "../../App.css";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <HeroContainer>
      <HeroContent>
        <h1 className="h1-hero">Authenticate Your Work</h1>
        <p className="hero-text">
          {/* Sign up today and recieve $250 in credit for your next successful
          project. */}
        </p>
        <HeroBtnWrapper>
          <ButtonR onClick={(e) => {
            e.preventDefault();
            openInNewTab("https://airtable.com/shrQ4fn5byIdJZfq4")
            }}
            onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Join Waitlist {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonR>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;