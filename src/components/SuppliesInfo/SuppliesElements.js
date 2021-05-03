import styled, { css } from "styled-components/macro";
import { rgba } from "polished";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

export const SuppliesInfoContainer = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const SuppliesH1 = styled.h1`
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 45px;
`;

export const SuppliesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Check = styled(FaCheckCircle)`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  padding: 0.5rem;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 12px;
  display: none;
`;

export const SupplyBox = styled.div`
  position: relative;
  display: block;
  width: calc((50vw - 3rem) / 3);
  border: 2px solid #f1356d;
  border-radius: 15px;
  margin: 1rem;
  transition: all 0.2s ease;

  img {
    width: calc((50vw - 3rem) / 3);
  }

  ${({ isSelected }) => {
    if (isSelected) {
      return css`
        background-color: ${rgba("#8D81EF", 0.2)};
        border: 2px solid #8d81ef;
        ${Check} {
          display: block;
        }
      `;
    }
  }}

  @media screen and (max-width: 768px) {
    width: calc((100vw - 4rem) / 3);

    img {
      width: calc((100vw - 4rem) / 3);
    }
  }
`;

export const BoxIcon = styled.div``;

export const Image = styled.img``;

export const SuppliesBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
