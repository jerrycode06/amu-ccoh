import React from "react";
import {
  InfoContainer,
  InfoH1,
  InfoRow,
  InfoLeftContent,
  ImgWrap,
  Image,
  InfoRightContent,
  InfoParagraph,
} from "./InfoElements";
import meditation from "../../images/health-meditation.svg";

const InfoSection = () => {
  return (
    <InfoContainer>
      <InfoH1>Motive</InfoH1>
      <InfoRow>
        <InfoLeftContent>
          <ImgWrap>
            <Image src={meditation} alt="Patient" />
          </ImgWrap>
        </InfoLeftContent>
        <InfoRightContent>
          <InfoParagraph>
            With the second wave of COVID-19 hitting our nation, we realise
            these are tough times for everyone. A lot of people are currently
            overwhelmed and struggling to find relevant information on what to
            do and what measures to take if they or someone they know is
            currently affected by the virus. There are many messages on social
            media with information on resources for oxygen, beds, medicines,
            plasma etc.
            <br />
            The credit goes to the diligent citizens on social media who are
            working round the clock to amplify help wherever possible. It's
            because of their selfless attitude that so much is being done on the
            ground. <br />
            We are here to provide you the most updated data related to oxygen
            cylinders, hospital beds and medicines which are provided by the
            verified sources.
          </InfoParagraph>
        </InfoRightContent>
      </InfoRow>
    </InfoContainer>
  );
};

export default InfoSection;
