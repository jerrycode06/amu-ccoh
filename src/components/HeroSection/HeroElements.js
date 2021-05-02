import styled from "styled-components/macro";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const HeroRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const HeroLeftContent = styled.div`
  margin-bottom: 15px;
  padding: 0 10px;
  grid-area: col1;
`;

export const HeroH1 = styled.h1`
  font-size: 45px;
  font-weight: 700;
  margin-top: 130px;
  margin-bottom: 40px;
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const HeroRightContent = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
