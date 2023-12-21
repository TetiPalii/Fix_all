import { HeaderMain } from "components/header/HeaderMain"
import { MainWrapper } from "./Layout.styled"
import { Hero } from "components/heroSection/Hero"


export const Layout=()=>{
    return <MainWrapper>
      
       <HeaderMain/>
      <Hero/>
     
       
      
    </MainWrapper>
}