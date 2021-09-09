import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar';
import Dialogue from '../components/Dialogue';
import Response from '../components/Response';

type Message = {id: string, logan: string, user: ResponseData[], reply: string, next: string};
type ResponseData = {text: string, next: string};
let dialogue: Message;

interface State {
  dialogue: Message
}

const section2responses: ResponseData[] = [
  {text: "Cool! I want to see!", next: "3a.1"},
  {text: "What kinds of stuff?", next: "3b.1"},
  {text: "Stuff is great.", next: "3c.1"}
]

const messageData: Message[] = [
  {
    id: "1.1",
    logan: "Hello, I'm Logan!",
    user: [],
    reply: "",
    next: "1.2"
  },
  {
    id: "1.2",
    logan: "Welcome to my little corner of the internet!",
    user: [
      {text: "Nice to meet you!", next: "2a.1"},
      {text: "Who are you? Where am I?", next: "2b.1"},
      {text: "Corners are great.", next: "2c.1"}
    ],
    reply: "",
    next: "1.2" // No change
  },
  {
    id: "2a.1",
    logan: "Nice to meet you too!",
    user: [],
    reply: "Nice to meet you!",
    next: "2a.2"
  },
  {
    id: "2a.2",
    logan: "My name is Logan Wang, I'm a CSE student at UW, and I like to make stuff (like this website)!",
    user: section2responses,
    reply: "Nice to meet you!",
    next: "2a.2" // No change
  },
  {
    id: "2b.1",
    logan: "Great questions!",
    user: [],
    reply: "Who are you? Where am I?",
    next: "2b.2"
  },
  {
    id: "2b.2",
    logan: "I'm Logan Wang, a CSE student at UW, and I like to make stuff!",
    user: [],
    reply: "Who are you? Where am I?",
    next: "2b.3"
  },
  {
    id: "2b.3",
    logan: "This website is home to fun projects I've built for others to see!",
    user: section2responses,
    reply: "Who are you? Where am I?",
    next: "2b.3" // No change
  },
  {
    id: "2c.1",
    logan: "Right? Corners ARE great.",
    user: [],
    reply: "Corners are great.",
    next: "2c.2"
  },
  {
    id: "2c.2",
    logan: "Anyway, my name is Logan Wang, I'm a CSE student at UW, and I like to make stuff!",
    user: section2responses,
    reply: "Corners are great.",
    next: "2c.2" // No change
  },
  {
    id: "3a.1",
    logan: "Hooray, please do!",
    user: [],
    reply: "Cool! I want to see!",
    next: "3a.2"
  },
  {
    id: "3a.2",
    logan: "Enjoy your visit and have a nice day!",
    user: [{text: "Sweet, thank you!", next: "/stuff"}],
    reply: "Cool! I want to see!",
    next: "3a.2" // No change
  },
  {
    id: "3b.1",
    logan: "Good question!",
    user: [],
    reply: "What kinds of stuff?",
    next: "3b.2"
  },
  {
    id: "3b.2",
    logan: "Take a look around to find out :)",
    user: [{text: "Okidoki", next: "/stuff"}],
    reply: "What kinds of stuff?",
    next: "3b.2" // No change
  },
  {
    id: "3c.1",
    logan: "Yes. I like the way you think.",
    user: [],
    reply: "Stuff is great.",
    next: "3c.2"
  },
  {
    id: "3c.2",
    logan: "Please take a look around and see what kinds of cool stuff you can find!",
    user: [{text: "Peace out rainbow trout.", next: "/stuff"}],
    reply: "Stuff is great.",
    next: "3c.2" // No change
  }
];
export default class Home extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      dialogue: messageData[0],
    };
    this.advanceDialogue = this.advanceDialogue.bind(this);
    this.getMessage = this.getMessage.bind(this);
  }

  render() {
    return(
      <div className={styles.about}>
        <NavBar active="about" />
        <div className={styles.flexTop} />
        <div className={styles.pfp}>
          <Image  src="/PFP Circle.png"
                  alt="Logan"
                  width={240}
                  height={240} />
        </div>
        <Dialogue text={this.state.dialogue.logan}
                  userResponse={this.state.dialogue.reply}
                  clickHandler={() => this.advanceDialogue(this.state.dialogue.next)}
                  clickable={this.state.dialogue.user.length == 0} />
        <div className={styles.responses}>
          {this.generateResponses()}
        </div>
        <div className={styles.flexBot} />
      </div>
    );
  }

  advanceDialogue(next: string) {
    this.setState({dialogue: this.getMessage(next)});
  }

  generateResponses() {
    const responses: ResponseData[] = this.state.dialogue.user;

    if (responses.length === 1) {
      return (
        <div className={styles.response}>
          <Link href="/stuff" passHref>
            <a>
              <Response text={responses[0].text} />
            </a>
          </Link>
        </div>
      );
    } else {
      return (
        <div className={styles.responses}>
          {responses.map((response: ResponseData) =>  <div className={styles.response}>
                                                        <Response text={response.text} clickHandler={() => this.advanceDialogue(response.next)} />
                                                      </div>)}
        </div>
      );
    }
  }

  getMessage(id: string) {
    switch (id) {
      case "1.1":
        return messageData[0];
      case "1.2":
        return messageData[1];
      case "2a.1":
        return messageData[2];
      case "2a.2":
        return messageData[3];
      case "2b.1":
        return messageData[4];
      case "2b.2":
        return messageData[5];
      case "2b.3":
        return messageData[6];
      case "2c.1":
        return messageData[7];
      case "2c.2":
        return messageData[8];
      case "3a.1":
        return messageData[9];
      case "3a.2":
        return messageData[10];
      case "3b.1":
        return messageData[11];
      case "3b.2":
        return messageData[12];
      case "3c.1":
        return messageData[13];
      case "3c.2":
        return messageData[14];
      default:
        return messageData[0];
    }
  }
}