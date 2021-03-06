import styled from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const ButtonR = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#F1356D" : "#010606")};
  white-space: wrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#ffffff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-weight: 700;
  outline: none;
  border: 2px solid #f1356d;
  width: ${({ lgwidth }) => (lgwidth ? "35%" : "25%")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: ${({ primary }) => (primary ? "#ffffff" : "#F1356D")};
    color: #f1356d;
    border: 2px solid #f1356d;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export const ButtonS = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#F1356D" : "#010606")};
  white-space: wrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#ffffff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-weight: 700;
  outline: none;
  border: 2px solid #f1356d;
  width: ${({ lgwidth }) => (lgwidth ? "35%" : "25%")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: ${({ primary }) => (primary ? "#ffffff" : "#F1356D")};
    color: #f1356d;
    border: 2px solid #f1356d;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    width: 53%;
  }
`;
