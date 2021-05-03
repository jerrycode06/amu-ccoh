import React from "react";
import { Button } from "../ButtonElements";
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
          <Button primary="true" lgwidth="true" to="/helpdesk">
            Click Here
          </Button>
        </BtnWrapper>
      </HelpDeskWrapper>
    </HelpDeskContainer>
  );
};

export default HelpDesk;
