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
                <div>As I learned from my previous experience with EasyBites, it&apos;s important be aware of how our designs will respond to different screen sizes. Every so often I would take the time to translate my desktop designs into their mobile counterparts. Thinking about how to transition between the wide and narrow screen sizes helped guide how I implemented the screens when coding later!</div>
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
                <div>EasyBites is a student led start-up which connects busy food lovers with passionate home cooks. Users send any recipe and we connect them to a chef for the job. I was heavily involved in designing screens for the landing page and product, and I helped build many of the landing page pages. Specifically, I focused on implementing systems to support good responsive design! Designed in Figma, developed in React.</div>
              </ProjectSection>
              <ProjectSection sectionHeader="Logo Design">
                <div>After settling upon a name, our first design challenge was to decide upon a logo. We worked together as a team to create several candidates, and then spent a long time trying to choose among them (which always seems to be the hardest part).</div>
                <Gap height={16} />
                <div>Shown below are a couple screenshots of our voting process. We wanted to get the entire team&apos;s feedback and did a couple rounds of voting using FigJam (which had just launched, like the week before!)</div>
                <Image  src="/Page Media/EasyBites/logo1.png"
                        alt="Logo screenshot 1"
                        width={1868}
                        height={544}/>
                <Gap height={8} />
                <Image  src="/Page Media/EasyBites/logo2.png"
                        alt="Logo screenshot 2"
                        width={1833}
                        height={619}/>
              </ProjectSection>
              <ProjectSection sectionHeader="Landing Page">
                <ProjectSection sectionHeader="1. Design" sectionSize="h3" callout>
                  <div>Next, the EasyTeam decided to design and develop a landing page as an exercise to help us learn before jumping into the actual product and to act as a place to direct any interest that might be generated as we develop the product and market ourselves.</div>
                  <Gap height={16} />
                  <div>First, the design team made rough wireframes, only focusing on what content to include and where it would be located. Our goal was to work quickly and get feedback often:</div>
                  <Image  src="/Page Media/EasyBites/lp1.png"
                          alt="Landing page wireframes"
                          width={6281}
                          height={5797}/>
                  <div>In an attempt to ensure visual consistency and improve the speed of our work, I tried to implement a design system using Figma components, following the principle of Atomic Design. I was surprised to find out how time consuming the process of organizing components turned out to be, and in the end it probably wasn&apos;t worth the investment for most of the elements. Nevertheless, I enjoyed researching design systems and I see how it would be important for larger organizations with many more designers.</div>
                  <Image  src="/Page Media/EasyBites/ButtonComponent.png"
                          alt="Button components"
                          width={1787}
                          height={694}/>
                  <div>Shown below is the final design for the landing page at the time this website was written:</div>
                  <Image  src="/Page Media/EasyBites/lp2.png"
                          alt="Landing page designs"
                          width={8793}
                          height={10177}/>
                </ProjectSection>
                <ProjectSection sectionHeader="2. Code" sectionSize="h3" callout>
                  <div>To implement the designs, our team used React with TypeScript for the frontend, and Firebase for the backend. I dealt almost entirely with the frontend for this project, though it was cool to get a glimpse into how the two sides worked together from scratch.</div>
                  <Gap height={16} />
                  <div>The main challenge I stepped up to tackle was making the website responsive. Originally, we designed the pages for desktop only, intending to translate the pages over to mobile later by making small tweaks to the code. This was what the pages looked like originally: </div>
                  <Image  src="/Page Media/EasyBites/Responsive Design.png"
                          alt="When responsive design goes wrong"
                          width={489}
                          height={809}/>
                  <div>It was not the best. This prompted me to learn a ton of CSS and ways to implement good responsive behavior inside of React components, learnings which I took to my next project, being my personal website.</div>
                  <Gap height={16} />
                  <div>I had a lot of fun designing some of the responsive components, like the Nav Bar and Footer. Both were interesting because they required some more complicated changes between mobile and desktop, so I couldn&apos;t simply rely on flexbox but I had to investigate more sophisticated responsive design techniques.</div>
                </ProjectSection>
              </ProjectSection>
              <ProjectSection sectionHeader="MVP">
                <div>The design team also created designs for the product itself. The process was much the same to the landing page, so below are simply some of my favorite screens: </div>
                <Image  src="/Page Media/EasyBites/mvp1.png"
                        alt="View offer page desktop"
                        width={1142}
                        height={862}/>
                <Image  src="/Page Media/EasyBites/mvp2.png"
                        alt="View offer page mobile"
                        width={355}
                        height={780}/>
                <Image  src="/Page Media/EasyBites/mvp3.png"
                        alt="Onboarding screens"
                        width={1240}
                        height={744}/>
              </ProjectSection>
              <div className={styles.sectionPair}>
                <ProjectSection sectionHeader="Links" sectionSize="h2" callout={false}>
                  <ul>
                    <li>
                      <a href="https://easybites.us/">EasyBites.us</a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/easybites.us">Facebook</a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/easybites.us/">Instagram</a>
                    </li>
                  </ul>
                </ProjectSection>
                <div className={styles.flexGap}/>
                <ProjectSection sectionHeader="Tools" sectionSize="h2" callout={false}>
                  <div className={styles.row}>
                    <Chip text="React w/ TypeScript" />
                    <div className={styles.chipGap} />
                    <Chip text="Figma | FigJam" />
                    <div className={styles.chipGap} />
                    <Chip text="CSS Modules" />
                  </div>
                  <Gap height={8} />
                  <div className={styles.row}>
                    <Chip text="Firebase" />
                    <div className={styles.chipGap} />
                    <Chip text="Adobe Illustrator" />
                    <div className={styles.chipGap} />
                    <Chip text="Next.js" />
                  </div>
                </ProjectSection>
                <div className={styles.flexGap}/>
              </div>
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
                          closePopup={() => this.closeProject()}>
              <ProjectSection sectionHeader="TL;DR">
                <div>A simple Solitaire game my brother and I created as a way to learn how to make games! We tried making it look cool, and stuff. But otherwise it&apos;s just solitaire lol. But it was really fun to make!</div>
              </ProjectSection>
              <ProjectSection sectionHeader="Screenshots">
                <Image  src="/Page Media/Project Solitaire/title.png"
                        alt="Solitaire title screen"
                        width={958}
                        height={554}/>
                <Gap height={8} />
                <Image  src="/Page Media/Project Solitaire/lose.png"
                        alt="Solitaire gameplay"
                        width={870}
                        height={499}/>
                <div>While I was gathering pictures for this website, I actually managed to win a game!</div>
                <Gap height={16} />
                <Image  src="/Page Media/Project Solitaire/win.png"
                        alt="Solitaire victory"
                        width={882}
                        height={525} />
                <Gap height={8} />
                <Image  src="/Page Media/Project Solitaire/win2.png"
                        alt="Solitaire victory 2"
                        width={899}
                        height={538} />
              </ProjectSection>
              <div className={styles.sectionPair}>
                <ProjectSection sectionHeader="Links" sectionSize="h2" callout={false}>
                <ul>
                    <li>
                      <a href="https://shogunlogan.itch.io/project-solitaire">Play!</a>
                    </li>
                    <li>
                      <a href="https://github.com/logansw/Project-Solitaire">Github</a>
                    </li>
                  </ul>
                </ProjectSection>
                <div className={styles.flexGap}/>
                <ProjectSection sectionHeader="Tools" sectionSize="h2" callout={false}>
                  <div className={styles.row}>
                    <Chip text="Unity" />
                    <div className={styles.chipGap} />
                    <Chip text="C#" />
                    <div className={styles.chipGap} />
                    <Chip text="Adobe Illustrator" />
                  </div>
                </ProjectSection>
                <div className={styles.flexGap}/>
              </div>
            </ProjectPage>
          </div>
        );
      case "naireative":
        return (
          <div className={styles.pageViewport}>
            <ProjectPage  img="/NaireAtive.svg"
                          title="NaireAtive Logo Design"
                          date="December 2020"
                          color="#253367"
                          closePopup={() => this.closeProject()}>
              <ProjectSection sectionHeader="TL;DR">
                <div>NaireAtive is another cool student led startup from UW! I had the opportunity to design their logo for them, which was a very cool experience as it was the first time I&apos;d done client work like that.</div>
              </ProjectSection>
              <ProjectSection sectionHeader="Process">
                <div>After meeting with the NaireAtive team and discussing what they kind of envisioned for a logo, I sketched a bunch of random ideas on index cards. One such design felt promising to me, which I made a rough digital version of:</div>
                <Image  src="/Page Media/NaireAtive/NaireAtive-Logo-Draft.png"
                        alt="NaireAtive logo draft"
                        width={1000}
                        height={1000} />
                <div>And then shortly thereafterI made a higher quality version: </div>
                <Image  src="/Page Media/NaireAtive/NaireAtive Vector Dark.png"
                        alt="NaireAtive logo draft vector"
                        width={452}
                        height={755} />
                <div>After a round of feedback, I updated the design slightly as follows: </div>
                <Image  src="/Page Media/NaireAtive/NaireAtive 3.png"
                        alt="NaireAtive logo v2"
                        width={462}
                        height={747} />
                <div>At this point, the team was feeling good about the design, but wanted to explore different variations to get it just right! So we discussed things we&apos;d want to look into, and I returned a few iterations: </div>
                <Image  src="/Page Media/NaireAtive/ccw30.png"
                        alt="NaireAtive logo rotated"
                        width={1500}
                        height={300} />
                <Image  src="/Page Media/NaireAtive/Extrabold Text.png"
                        alt="NaireAtive logo extrabold text"
                        width={1500}
                        height={300} />
                <Image  src="/Page Media/NaireAtive/Solid Stripe.png"
                        alt="NaireAtive logo solid stripe"
                        width={1500}
                        height={300} />
                <div>I also wanted to check to see how the different options might look at very small scales (scales at which logos are often seen): </div>
                <Image  src="/Page Media/NaireAtive/Mini Test.jpg"
                        alt="Miniature logo test"
                        width={372}
                        height={225} />
                <div>Finally, after some more adjustments, we settled upon this design!</div>
                <Image  src="/Page Media/NaireAtive/Logo Dark.png"
                        alt="NaireAtive logo final"
                        width={1795}
                        height={3116} />
              </ProjectSection>
              <div className={styles.sectionPair}>
                <ProjectSection sectionHeader="Links" sectionSize="h2" callout={false}>
                  <ul>
                    <li>
                      <a href="https://naireative.com/">NaireAtive&apos;s Website!</a>
                    </li>
                  </ul>
                </ProjectSection>
                <div className={styles.flexGap}/>
                <ProjectSection sectionHeader="Tools" sectionSize="h2" callout={false}>
                  <div className={styles.row}>
                    <Chip text="Adobe Photoshop" />
                    <div className={styles.chipGap} />
                    <Chip text="Adobe Illustrator" />
                  </div>
                  <Gap height={8} />
                </ProjectSection>
              </div>
            </ProjectPage>
          </div>
        );
      case "hop vehicle":
        return (
          <div className={styles.pageViewport}>
            <ProjectPage  img="/Hop Vehicle.svg"
                          title="Hop Vehicle"
                          date="August 2020"
                          color="#FF53A8"
                          closePopup={() => this.closeProject()}>
              <ProjectSection sectionHeader="TL;DR">
                <div>EasyBites is a student led start-up which connects busy food lovers with passionate home cooks. Users send any recipe and we connect them to a chef for the job. I was heavily involved in designing screens for the landing page and product, and I helped build many of the landing page pages. Specifically, I focused on implementing systems to support good responsive design! Designed in Figma, developed in React.</div>
              </ProjectSection>
              <ProjectSection sectionHeader="Logo Design">
                <div>After settling upon a name, our first design challenge was to decide upon a logo. We worked together as a team to create several candidates, and then spent a long time trying to choose among them (which always seems to be the hardest part).</div>
                <Gap height={16} />
                <div>Shown below are a couple screenshots of our voting process. We wanted to get the entire team&apos;s feedback and did a couple rounds of voting using FigJam (which had just launched, like the week before!)</div>
                <Image  src="/Page Media/EasyBites/logo1.png"
                        alt="Logo screenshot 1"
                        width={1868}
                        height={544}/>
                <Gap height={8} />
                <Image  src="/Page Media/EasyBites/logo2.png"
                        alt="Logo screenshot 2"
                        width={1833}
                        height={619}/>
              </ProjectSection>
              <div className={styles.sectionPair}>
                <ProjectSection sectionHeader="Links" sectionSize="h2" callout={false}>
                  <ul>
                    <li>
                      <a href="https://easybites.us/">EasyBites.us</a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/easybites.us">Facebook</a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/easybites.us/">Instagram</a>
                    </li>
                  </ul>
                </ProjectSection>
                <div className={styles.flexGap}/>
                <ProjectSection sectionHeader="Tools" sectionSize="h2" callout={false}>
                  <div className={styles.row}>
                    <Chip text="React w/ TypeScript" />
                    <div className={styles.chipGap} />
                    <Chip text="Figma | FigJam" />
                    <div className={styles.chipGap} />
                    <Chip text="CSS Modules" />
                  </div>
                  <Gap height={8} />
                  <div className={styles.row}>
                    <Chip text="Firebase" />
                    <div className={styles.chipGap} />
                    <Chip text="Adobe Illustrator" />
                    <div className={styles.chipGap} />
                    <Chip text="Next.js" />
                  </div>
                </ProjectSection>
              </div>
            </ProjectPage>
          </div>
        );
      case "super spacebar":
        return (
          <div className={styles.pageViewport}>
            <ProjectPage  img="/Super Spacebar.svg"
                          title="Super Spacebar"
                          date="July 2020"
                          color="#E14C63"
                          closePopup={() => this.closeProject()}>
              <ProjectSection sectionHeader="TL;DR">
                <div>EasyBites is a student led start-up which connects busy food lovers with passionate home cooks. Users send any recipe and we connect them to a chef for the job. I was heavily involved in designing screens for the landing page and product, and I helped build many of the landing page pages. Specifically, I focused on implementing systems to support good responsive design! Designed in Figma, developed in React.</div>
              </ProjectSection>
              <ProjectSection sectionHeader="Logo Design">
                <div>After settling upon a name, our first design challenge was to decide upon a logo. We worked together as a team to create several candidates, and then spent a long time trying to choose among them (which always seems to be the hardest part).</div>
                <Gap height={16} />
                <div>Shown below are a couple screenshots of our voting process. We wanted to get the entire team&apos;s feedback and did a couple rounds of voting using FigJam (which had just launched, like the week before!)</div>
                <Image  src="/Page Media/EasyBites/logo1.png"
                        alt="Logo screenshot 1"
                        width={1868}
                        height={544}/>
                <Gap height={8} />
                <Image  src="/Page Media/EasyBites/logo2.png"
                        alt="Logo screenshot 2"
                        width={1833}
                        height={619}/>
              </ProjectSection>
              <div className={styles.sectionPair}>
                <ProjectSection sectionHeader="Links" sectionSize="h2" callout={false}>
                  <ul>
                    <li>
                      <a href="https://easybites.us/">EasyBites.us</a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/easybites.us">Facebook</a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/easybites.us/">Instagram</a>
                    </li>
                  </ul>
                </ProjectSection>
                <div className={styles.flexGap}/>
                <ProjectSection sectionHeader="Tools" sectionSize="h2" callout={false}>
                  <div className={styles.row}>
                    <Chip text="React w/ TypeScript" />
                    <div className={styles.chipGap} />
                    <Chip text="Figma | FigJam" />
                    <div className={styles.chipGap} />
                    <Chip text="CSS Modules" />
                  </div>
                  <Gap height={8} />
                  <div className={styles.row}>
                    <Chip text="Firebase" />
                    <div className={styles.chipGap} />
                    <Chip text="Adobe Illustrator" />
                    <div className={styles.chipGap} />
                    <Chip text="Next.js" />
                  </div>
                </ProjectSection>
              </div>
            </ProjectPage>
          </div>
        );
      default:
        return null;
    }
  }
}