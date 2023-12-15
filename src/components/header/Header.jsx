import React from "react";
import logoWhite from '../../assests/images/Logo_White.png'
import { Button } from "components/button/Button";
import { HeaderStyled } from "./Header.styled";

export const Header =()=>{
    return <HeaderStyled>
        <div>
           <img src={`${logoWhite}`} alt="Fix all logo" width={84} height={22} />
        </div>
        
      <div>
      <Button text={'Sign in'}/>
        <Button text={'Join'}/>
      </div>
    </HeaderStyled>
}