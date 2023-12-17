import React from "react";
import { HeroHeaderWrapp } from "./SharedWrapper.styled";

export const SharedWrapper = ({children}) => {
    return <HeroHeaderWrapp>
{children}
    </HeroHeaderWrapp>
}