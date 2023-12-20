import styled from '@emotion/styled';
import background from '../../assests/images/heroMobile.jpg';
import background2x from '../../assests/images/heroMobile@2x.jpg'
export const HeroHeaderWrapp = styled.div`
  width: 100%;
  height: 413px;
  background-color: #c4c4c4;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx){
    background-image:url(${background2x})
  }
`;
