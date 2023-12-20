import { HeaderMain } from "components/header/HeaderMain";
import { Hero } from "components/heroSection/Hero";
import { MainWrapper } from "components/layout/Layout.styled";
import { SharedWrapper } from "components/sharedWrapper/SharedWrapper";
import React from "react";

const Home = ()=>{
return <MainWrapper>
<SharedWrapper>
<HeaderMain/>
<Hero/>
</SharedWrapper>
</MainWrapper>
}
export default Home