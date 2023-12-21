import styled from '@emotion/styled';
import background from '../../assests/images/heroMobile.jpg';
import background2x from '../../assests/images/heroMobile@2x.jpg';
import backgroundTablet from '../../assests/images/heroTab.jpg';
import backgroundTablet2x from '../../assests/images/heroTab@2x.jpg';
import backgroundDesk from '../../assests/images/heroDesk.jpg';
import backgroundDesk2x from '../../assests/images/heroDesk@2x.jpg';

import { desktop, tablet, min } from 'styles/media';


 

export const HeroSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 130px 10px 106px;
  background-color: grey;
  /* height:413px;
background-color: #C4C4C4; */
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${background2x});
  }
 

  ${min(tablet)} {
    background-image: url(${backgroundTablet});
    @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${backgroundTablet2x});
  }
  }
  ${min(desktop)} {
    background-image: url(${backgroundDesk});
    @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${backgroundDesk2x});
  }
  }

`;

export const HeroContainer = styled.div`
  max-width: 355px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1Wrapp = styled.div`
  width: 339px;
  margin: 0 auto 39px;
`;

export const H1 = styled.h1`
  font-size: 24px;
  color: #fff;
  text-align: center;
  font-weight: 700;
  line-height: normal;
`;
