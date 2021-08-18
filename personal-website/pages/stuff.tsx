import React from "react";
import styles from '../styles/stuff.module.css'
import NavBar from "../components/NavBar";
import ProjectPreview from "../components/ProjectPreview";
import ProjectPage from "../components/ProjectPage";

interface Props {
  // Nothing here at the moment
}

interface State {
  openProject: Project
}

type Project =  "none" |
                "personal website" |
                "easybites" |
                "project solitaire" |
                "naireative" |
                "hop vehicle" |
                "super spacebar";

export default class Stuff extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      openProject: "none"
    };
  }

  openProject(project: Project) {
    this.setState({openProject: project});
  }

  closeProject() {
    this.setState({openProject: "none"});
  }

  render() {
    return (
      <div>
        {this.renderProjectPage()}
        <NavBar active="stuff"/>
        <main className={styles.main}>
          <div className={styles.wrap}>
            <ProjectPreview img="/Whaleshark Logo 2.svg" clickHandler={() => this.openProject("personal website")}></ProjectPreview>
            <ProjectPreview img="/EasyBites.svg" clickHandler={() => this.openProject("easybites")}></ProjectPreview>
            <ProjectPreview img="/Project Solitaire.svg" clickHandler={() => this.openProject("project solitaire")}></ProjectPreview>
            <ProjectPreview img="/NaireAtive.svg" clickHandler={() => this.openProject("naireative")}></ProjectPreview>
            <ProjectPreview img="/Hop Vehicle.svg" clickHandler={() => this.openProject("hop vehicle")}></ProjectPreview>
            <ProjectPreview img="/Super Spacebar.svg" clickHandler={() => this.openProject("super spacebar")}></ProjectPreview>
          </div>
        </main>
        <div className={this.state.openProject == "none" ? styles.notDim : styles.dim} onClick={() => this.closeProject()}/>
      </div>
    );
  }

  renderProjectPage() {
    switch (this.state.openProject) {
      case "none":
        return null;
      case "personal website":
        return (
          <ProjectPage  img="/Whaleshark Logo 2.svg"
                        title="Personal Website"
                        date="July 2021"
                        color=""
                        closePopup={() => this.closeProject()}></ProjectPage>
        );
      default:
        return null;
    }
  }
}