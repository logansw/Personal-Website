import React from "react";
import styles from '../styles/stuff.module.css'
import NavBar from "../components/NavBar";
import ProjectPreview from "../components/ProjectPreview";

export default class Stuff extends React.Component {
  render() {
    return(
      <div>
        <NavBar active="stuff"/>
        <main className={styles.main}>
          <div className={styles.wrap}>
            <ProjectPreview img="/Whaleshark Logo 2.svg"></ProjectPreview>
            <ProjectPreview img="/EasyBites.svg"></ProjectPreview>
            <ProjectPreview img="/Project Solitaire.svg"></ProjectPreview>
            <ProjectPreview img="/NaireAtive.svg"></ProjectPreview>
            <ProjectPreview img="/Hop Vehicle.svg"></ProjectPreview>
            <ProjectPreview img="/Super Spacebar.svg"></ProjectPreview>
          </div>
        </main>
      </div>
    );
  }
}