import React from "react";
import logoWhite from '../../assests/LogoWhite.png'
import logoWhite2x from '../../assests/LogoWhite@2x.png'
// import { Button } from "components/button/Button";
import { HeaderButton, HeaderStyled } from "./Header.styled";
import { ButtonStyled } from "components/button/Button.styled";

export const HeaderMain =()=>{
    return <HeaderStyled>
        <div>
           <img src={logoWhite} alt="Fix all logo" width={84} height={22}  srcSet={`${logoWhite2x} 2x, ${logoWhite} 1x`}/>
        </div>
        
      <div>
      <HeaderButton>Sign in</HeaderButton>
        <HeaderButton>Join</HeaderButton>
      </div>
    </HeaderStyled>
}