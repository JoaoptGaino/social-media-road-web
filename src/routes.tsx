import React from "react";
import {Route,BrowserRouter} from "react-router-dom";
import Login from "./Pages/Login/index";
import Timeline from "./Pages/Timeline";

const Routes = () =>{
  return(
    <BrowserRouter>
      <Route path="/" component={Login} exact/>
      <Route path="/timeline" component={Timeline}/>
    </BrowserRouter>
  )
}

export default Routes;