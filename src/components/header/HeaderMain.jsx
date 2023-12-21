import React from "react";
import logoWhite from '../../assests/LogoWhite.png'
import logoWhite2x from '../../assests/LogoWhite@2x.png'
// import { Button } from "components/button/Button";
import { ButtonList, HeaderButton, HeaderContainer, HeaderStyled } from "./Header.styled";


export const HeaderMain =()=>{
    return <HeaderStyled>
      <HeaderContainer>
        <div>
           <img src={logoWhite} alt="Fix all logo" width={84} height={22}  srcSet={`${logoWhite2x} 2x, ${logoWhite} 1x`}/>
        </div>
        
      <ButtonList>
        <li><HeaderButton>Sign in</HeaderButton></li>
        <li><HeaderButton>Join</HeaderButton></li>
      </ButtonList>
    </HeaderContainer>
    </HeaderStyled>
}