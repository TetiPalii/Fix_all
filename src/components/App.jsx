import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";

const Home = lazy(()=>import('../pages/home/Home'))
export const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    </Route>
   </Routes>
  );
};
