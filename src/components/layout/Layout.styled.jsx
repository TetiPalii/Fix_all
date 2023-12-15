import styled from '@emotion/styled';
import { desktop, tablet, min } from 'styles/media';
import background from '../../assests/images/heroMobile.jpg';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${min(desktop)} {
    width: 1440px;
  }
  ${min(tablet)} {
    width: 768px;
  }
`;
export const SharedDiv = styled.div`
  width: 100%;
  height: 413px;
  background-color: #c4c4c4;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
