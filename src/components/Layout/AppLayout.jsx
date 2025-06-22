import { Outlet } from "react-router-dom";

import Footers from "../UI/Footer";
import React from 'react'
import Headers from "../UI/Headers";

export const AppLayout = () => {
  return (
    <>
     <Headers/>
      <Outlet />
      <Footers />
      </>
  )
}

export default AppLayout
