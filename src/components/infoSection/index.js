import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { InfoContainer, InfoWrapper, Subtitle, Title } from "./InfoElements";

export const InfoSection = ({ id, title, subtitle, text, image }) => {
  return (
    <>
      <InfoContainer id={id} className="bg-black">
        <InfoWrapper>
          <div className="row expand-row gx-5">
            <div className="col-lg-6 col-sm-12 my-auto">
              <Subtitle>{subtitle}</Subtitle>
              <Title style={{color: "#1584EE"}} className="mb-5">{title} <span style={{color: "white"}}>Networks</span></Title>
              <p className="text-white mb-4">{text}</p>
            </div>
            <div className="col-lg-6 col-sm-12 img-wrap">
              <img src={image} alt="" className="fit-img"></img>
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;