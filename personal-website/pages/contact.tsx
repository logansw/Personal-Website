import React from "react";
import NavBar from "../components/NavBar";

export default class Contact extends React.Component {
  render() {
    return(
      <div>
        <NavBar active="contact"/>
        <h1>Contact</h1>
      </div>
    );
  }
}