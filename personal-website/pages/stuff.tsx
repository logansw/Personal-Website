import React from "react";
import styles from '../styles/stuff.module.css'
import NavBar from "../components/NavBar";
import ProjectPreview from "../components/ProjectPreview";
import ProjectPage from "../components/ProjectPage";
import ProjectSection from "../components/ProjectSection";
import Chip from "../components/Chip";
import Image from "next/image";
import Gap from "../components/Gap";

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
        <main className={styles.main}>
          <NavBar active="stuff"/>
          <div className={styles.flexGap} />
          <div className={styles.wrap}>
            <ProjectPreview img="/Whaleshark Logo 2.svg" clickHandler={() => this.openProject("personal website")}></ProjectPreview>
            <ProjectPreview img="/EasyBites.svg" clickHandler={() => this.openProject("easybites")}></ProjectPreview>
            <ProjectPreview img="/Project Solitaire.svg" clickHandler={() => this.openProject("project solitaire")}></ProjectPreview>
            <ProjectPreview img="/NaireAtive.svg" clickHandler={() => this.openProject("naireative")}></ProjectPreview>
            <ProjectPreview img="/Hop Vehicle.svg" clickHandler={() => this.openProject("hop vehicle")}></ProjectPreview>
            <ProjectPreview img="/Super Spacebar.svg" clickHandler={() => this.openProject("super spacebar")}></ProjectPreview>
          </div>
          <div className={styles.flexGap} />
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
              <ProjectSection sectionHeader="Screenshots"/>
              <ProjectSection sectionHeader="1. About Section" sectionSize="h3" callout={true}>
                <div>Early on in the design I settled on this dialogue system idea as a fun, conversational way to introduce myself. I had a lot of fun designing these pages 😀!</div>
                <Image  src="/Page Media/Personal Website/image 1.png"
                        alt="About section designs"
                        width={4388}
                        height={5645}/>
              </ProjectSection>
              <ProjectSection sectionHeader="2. Stuff Section" sectionSize="h3" callout={true}>
                <div>Project Preview Designs</div>
                <Gap height={12} />
                <Image  src="/Page Media/Personal Website/image 3.png"
                        alt="Project preview designs"
                        width={2976}
                        height={2728}/>
                <Gap height={8} />
                <div>The project preview cards were one of the first things I designed. I went through a few iterations before settling on the square cards on the site now. I wanted to make sure they were simple and visually consistent, yet also flexible to work with any future projects I might have, so I went with the simple logos!</div>
                <Gap height={36} />
                <div>Project Page Designs</div>
                <Gap height={12} />
                <Image  src="/Page Media/Personal Website/image 2.png"
                        alt="Project page designs"
                        width={5804}
                        height={3380}/>
                <Gap height={8} />
                <div>The project pages were the most complex to design, as I had to juggle a lot of considerations so they could support all kinds of content (which was yet to be written). Balancing functionality against the visuals was also challenging, requiring a ton of tweaking and redesigning. I like the system I came up with though: structurally, each page requires a logo, title, date, and color, and the page simply stretches vertically to fit more and more content, which are individual blocks of text (or other media).</div>
              </ProjectSection>
              <ProjectSection sectionHeader="3. Mobile" sectionSize="h3" callout={true}>
                <div>As I learned from my previous experience with EasyBites, it's important be aware of how our designs will respond to different screen sizes. Every so often I would take the time to translate my desktop designs into their mobile counterparts. Thinking about how to transition between the wide and narrow screen sizes helped guide how I implemented the screens when coding later!</div>
                <Gap height={8} />
                <Image  src="/Page Media/Personal Website/image 4.png"
                        alt="Mobile version designs"
                        width={3033}
                        height={3397}/>
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
                <div className={styles.flexGap}/>
                <ProjectSection sectionHeader="Tools" sectionSize="h2" callout={false}>
                  <div className={styles.row}>
                    <Chip text="React w/ TypeScript" />
                    <div className={styles.chipGap} />
                    <Chip text="Figma" />
                    <div className={styles.chipGap} />
                    <Chip text="CSS Modules" />
                  </div>
                </ProjectSection>
                <div className={styles.flexGap}/>
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