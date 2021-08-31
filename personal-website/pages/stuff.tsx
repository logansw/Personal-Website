import React from "react";
import styles from '../styles/stuff.module.css'
import NavBar from "../components/NavBar";
import ProjectPreview from "../components/ProjectPreview";
import ProjectPage from "../components/ProjectPage";
import ProjectSection from "../components/ProjectSection";
import Chip from "../components/Chip";

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
          <div className={styles.pageViewport}>
            <ProjectPage  img="/Whaleshark Logo 2.svg"
                          title="Personal Website"
                          date="July 2021 - Present"
                          color="#F7F9D0"
                          closePopup={() => this.closeProject()}>
              <ProjectSection sectionHeader="TL;DR">
                <div>The website you are on right now! Mainly a for-fun project to practice my web dev skills and to make it easy to share my projects with friends and recruiters. Designed in Figma and developed with React.</div>
              </ProjectSection>
              <ProjectSection sectionHeader="Process"/>
              <ProjectSection sectionHeader="1. Design" sectionSize="h3" callout={true}>
                <div>The website you are on right now, silly! Mainly a for-fun project to practice my web dev skills and to make it easy to share my projects with friends and recruiters! Designed in Figma and developed with React.</div>
              </ProjectSection>
              <ProjectSection sectionHeader="2. Code" sectionSize="h3" callout={true}>
                <div>The website you are on right now, silly! Mainly a for-fun project to practice my web dev skills and to make it easy to share my projects with friends and recruiters! Designed in Figma and developed with React.</div>
              </ProjectSection>
              <div className={styles.sectionPair}>
                <ProjectSection sectionHeader="Links" sectionSize="h2" callout={false}>
                  <ul>
                    <li>
                      <a href="https://github.com/logansw/Personal-Website">Github</a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/">Actual website</a>
                    </li>
                  </ul>
                </ProjectSection>
                <div className={styles.flexgap}/>
                <ProjectSection sectionHeader="Tools" sectionSize="h2" callout={false}>
                  <div className={styles.row}>
                    <Chip text="React w/ TypeScript" />
                    <div className={styles.chipGap} />
                    <Chip text="Figma" />
                    <div className={styles.chipGap} />
                    <Chip text="CSS Modules" />
                  </div>
                </ProjectSection>
                <div className={styles.flexgap}/>
              </div>
            </ProjectPage>
          </div>
        );
      case "easybites":
        return (
          <div className={styles.pageViewport}>
            <ProjectPage  img="/EasyBites.svg"
                          title="EasyBites.us"
                          date="January 2021 - Present"
                          color="#72A276"
                          closePopup={() => this.closeProject()}>
              <ProjectSection sectionHeader="TL;DR">
                <p>The website you are on right now, silly! Mainly a for-fun project to practice my web dev skills and to make it easy to share my projects with friends and recruiters! Designed in Figma and developed with React.</p>
              </ProjectSection>
            </ProjectPage>
          </div>
        );
      case "project solitaire":
        return (
          <div className={styles.pageViewport}>
            <ProjectPage  img="/Project Solitaire.svg"
                          title="Project Solitaire"
                          date="January 2021"
                          color="#000000"
                          closePopup={() => this.closeProject()}></ProjectPage>
          </div>
        );
      case "naireative":
        return (
          <div className={styles.pageViewport}>
            <ProjectPage  img="/NaireAtive.svg"
                          title="NaireAtive Logo Design"
                          date="December 2020"
                          color="#253367"
                          closePopup={() => this.closeProject()}></ProjectPage>
          </div>
        );
      case "hop vehicle":
        return (
          <div className={styles.pageViewport}>
            <ProjectPage  img="/Hop Vehicle.svg"
                          title="Hop Vehicle"
                          date="August 2020"
                          color="#FF53A8"
                          closePopup={() => this.closeProject()}></ProjectPage>
          </div>
        );
      case "super spacebar":
        return (
          <div className={styles.pageViewport}>
            <ProjectPage  img="/Super Spacebar.svg"
                          title="Super Spacebar"
                          date="July 2020"
                          color="#E14C63"
                          closePopup={() => this.closeProject()}></ProjectPage>
          </div>
        );
      default:
        return null;
    }
  }
}