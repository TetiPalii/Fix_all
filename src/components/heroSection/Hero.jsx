import React from "react";
import { H1, H1Wrapp, HeroContainer, HeroSection } from "./Hero.styled";
import { SearchCategory } from "./searchCategory/SearchCategory";

export const Hero = () => {
    return <HeroSection>
      <HeroContainer>
      <H1Wrapp>
       <H1>Find The Perfect Freelance Services For Your Business</H1>
       </H1Wrapp>
       <SearchCategory/>
      </HeroContainer>
    </HeroSection>
}