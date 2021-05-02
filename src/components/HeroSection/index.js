import React, { useState } from "react";
import {
  HeroContainer,
  HeroRow,
  HeroLeftContent,
  HeroH1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroRightContent,
  ImgWrap,
  Image,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import hospitalBed from "../../images/health-hospital-bed.svg";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroRow imgStart={false}>
        <HeroLeftContent>
          <HeroH1>
            One Place to get information of all health related updates and
            resources.
          </HeroH1>
          <HeroBtnWrapper>
            <Button
              to="/getinfo"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroLeftContent>
        <HeroRightContent>
          <ImgWrap>
            <Image src={hospitalBed} alt="Patient" />
          </ImgWrap>
        </HeroRightContent>
      </HeroRow>
    </HeroContainer>
  );
};

export default HeroSection;
