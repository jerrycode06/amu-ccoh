import styled from "styled-components/macro";

export const InfoContainer = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoH1 = styled.h1`
  margin-top: 40px;
  text-align: center;
  font-size: 45px;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const InfoLeftContent = styled.div`
  margin-bottom: 15px;
  padding: 0 10px;
  grid-area: col1;
`;

export const ImgWrap = styled.div``;

export const Image = styled.img``;

export const InfoRightContent = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const InfoParagraph = styled.p`
  text-align: justify;
`;
