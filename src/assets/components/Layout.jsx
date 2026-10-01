import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import { Outlet } from "react-router-dom";
import { useState } from "react";

function Layout(){
  
    return(
        <>
          <Header onSetBusca={setBusca} />
            <Outlet />
          <Footer />
        </>
  )  
}

export default Layout