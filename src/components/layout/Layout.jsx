import { HeaderMain } from "components/header/HeaderMain"
import { MainWrapper } from "./Layout.styled"
import { Hero } from "components/heroSection/Hero"
import { SharedWrapper } from "components/sharedWrapper/SharedWrapper"

export const Layout=()=>{
    return <MainWrapper>
       <SharedWrapper>
       <HeaderMain/>
      <Hero/>
       </SharedWrapper>
       
      
    </MainWrapper>
}