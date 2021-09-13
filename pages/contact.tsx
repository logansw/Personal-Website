import React from "react";
import styles from "../styles/Contact.module.css";
import NavBar from "../components/NavBar";
import Dialogue from "../components/Dialogue";
import Response from "../components/Response";

interface State {
  messageIndex: number
}

const contactData: string[] = [
  "Hello hello, feel free to leave me a message about anything!",
  "For example: How your day's been going",
  "If you want to play League or Valorant",
  "*Any recruiting opportunities*",
  "If you have any good jokes, etc.",
  "Just let me know, you know? Thanks![END]"
]

const boldRegex = /(^\*).*(\*$)/g;
const endRegex = /\[END\]$/g;

export default class Contact extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      messageIndex: 0,
    }
    this.increment = this.increment.bind(this);
  }

  render() {
    let cleanString = contactData[this.state.messageIndex];
    // Bold check
    let bold: boolean = contactData[this.state.messageIndex].match(boldRegex) !== null;
    if (bold) {
      cleanString = cleanString.substr(1, cleanString.length - 2);
    }
    // END check
    let clickable: boolean = contactData[this.state.messageIndex].match(endRegex) === null;
    if (!clickable) {
      cleanString = cleanString.replace(endRegex, '');
    }
    return(
      <div className={styles.contact}>
        <NavBar active="contact"/>
        <div className={styles.flexTop} />
        <Dialogue text={cleanString}
                  userResponse=""
                  clickHandler={this.increment}
                  clickable={clickable}
                  bold={bold}/>
        <div className={styles.smallGap} />
        <div className={styles.button}>
          <Response text="Contact"/>
        </div>
        <div className={styles.flexBot} />
      </div>
    );
  }

  increment() {
    if (this.state.messageIndex < contactData.length - 1) {
      this.setState((state: State) => {
        return {messageIndex: state.messageIndex + 1}
      });
    }
  }
}