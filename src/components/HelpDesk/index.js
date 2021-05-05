import React from "react";
import { ButtonR } from "../ButtonElements";
import {
  HelpDeskContainer,
  HelpDeskWrapper,
  HelpDeskH1,
  BtnWrapper,
} from "./HelpDeskElements";

const HelpDesk = () => {
  return (
    <HelpDeskContainer>
      <HelpDeskWrapper>
        <HelpDeskH1>University Help Desk</HelpDeskH1>
        <BtnWrapper>
          <ButtonR primary="true" lgwidth="true" to="/helpdesk">
            Click Here
          </ButtonR>
        </BtnWrapper>
      </HelpDeskWrapper>
    </HelpDeskContainer>
  );
};

export default HelpDesk;
