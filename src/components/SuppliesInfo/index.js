import React, { useContext, useState } from "react";
import {
  SuppliesInfoContainer,
  SuppliesH1,
  SuppliesWrapper,
  SupplyBox,
  Check,
  BoxIcon,
  Image,
  SuppliesBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./SuppliesElements";
import { ButtonR } from "../ButtonElements";
import { boxData } from "./boxData";
import { SelectedContext } from "../../context/selected";

const SuppliesInfo = () => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectedArray, setSelectedArray] = useContext(SelectedContext);

  const onHover = () => {
    setHover(!hover);
  };

  const isSelected = (name) => {
    let el = selected.filter((boxName) => boxName === name);
    return el.length !== 0;
  };

  const handleClick = (name) => {
    let newSelected = [...selected];
    if (isSelected(name)) {
      newSelected = newSelected.filter((boxName) => boxName !== name);
    } else {
      let el = boxData.filter((box) => box.name === name);
      newSelected.push(el[0].name);
    }
    setSelected(newSelected);
    setSelectedArray(newSelected);
  };

  return (
    <SuppliesInfoContainer id="supplies">
      <SuppliesH1>What do you want?</SuppliesH1>
      <SuppliesWrapper>
        {boxData.map((box) => (
          <SupplyBox
            key={box.id}
            onClick={() => handleClick(box.name)}
            isSelected={isSelected(box.name)}
          >
            <Check />
            <BoxIcon>
              <Image src={`boxes/${box.icon}`} alt={box.name} />
            </BoxIcon>
          </SupplyBox>
        ))}
      </SuppliesWrapper>
      <SuppliesBtnWrapper>
        <ButtonR
          to="/supplies"
          primary="true"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          Next {hover ? <ArrowForward /> : <ArrowRight />}
        </ButtonR>
      </SuppliesBtnWrapper>
    </SuppliesInfoContainer>
  );
};

export default SuppliesInfo;
