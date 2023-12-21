import styled from '@emotion/styled';
import { desktop, tablet, min } from 'styles/media';

export const MainWrapper = styled.div`
  /* display: flex; AK
  flex-direction: column; AK*/
  max-width: 375px;
  margin: 0 auto;

  ${min(tablet)} {
    max-width: 768px;
  }
  ${min(desktop)} {
    max-width: 1440px;
  }
`;
