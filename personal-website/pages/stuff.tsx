import React from "react";
import NavBar from "../components/NavBar";

export default class Stuff extends React.Component {
  render() {
    return(
      <div>
        <NavBar active="stuff"/>
        <h1>Stuff</h1>
      </div>
    );
  }
}