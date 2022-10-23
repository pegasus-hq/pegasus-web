import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { InfoContainer, InfoWrapper, Subtitle, Title } from "./InfoElements";
import { ButtonBasicInv } from "../ButtonElements";

export const InfoSection2 = ({
  id,
  title,
  subtitle,
  text,
  image,
  btnText
}) => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <InfoContainer id={id} className="bg-white">
        <InfoWrapper>
          <div className="row expand-row gx-5">
            <div className="col-lg-6 col-sm-12 img-wrap">
              <img src={image} alt="" className="fit-img"></img>
            </div>
            <div className="col-lg-6 col-sm-12 my-auto">
              <Subtitle>{subtitle}</Subtitle>
              <Title className="text-black mb-5">{title}</Title>
              <p className="text-black mb-4">{text}</p>
              <ButtonBasicInv onClick={(e) => {
                e.preventDefault();
                openInNewTab("https://airtable.com/shrQ4fn5byIdJZfq4");
              }} 
              primary="false" dark="true" className="mx-auto">
                  {btnText}
              </ButtonBasicInv>
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection2;