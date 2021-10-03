
import React from "react";
import FetchApi from './fetchapi/FetchApi'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import FetchAPIClass from "./fetchapi/fetchApiWithClassComp";

export default function App() {
  return (
    <div className="App">
      {/* <FetchApi /> */}
      <FetchAPIClass />
    </div>
  );
}
