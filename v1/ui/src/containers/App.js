import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

import Layout from "../Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";

const App = (props) => {
  return (
    <Layout>
      <BurgerBuilder />
    </Layout>
  );
};
export default App;
