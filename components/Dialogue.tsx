import React from "react";
import styles from "./Dialogue.module.css";
import Image from "next/image"

interface Props {
  text: string,
  userResponse: string,
  clickHandler: any,
  clickable?: boolean,
  bold?: boolean,
}

export default class Dialogue extends React.Component<Props> {
  render() {
    return (
      <div className={styles.dialogue}>
        <div className={styles.relative}>
          {this.renderUserResponse()}
        </div>
        {this.renderLoganResponse()}
      </div>
    );
  }

  renderUserResponse() {
    if (this.props.userResponse === "") {
      return null;
    } else {
      return (
        <div className={styles.userResponse}>
          {this.props.userResponse}
        </div>
      );
    }
  }

  renderLoganResponse() {
    if (this.props.clickable) {
      let styleArr = [];
      styleArr.push(styles.logan);
      styleArr.push(styles.clickable);
      if (this.props.bold) {
        styleArr.push(styles.bold);
      }

      return (
        <div className={styleArr.join(' ')} onClick={this.props.clickHandler}>
          <div className={styles.text}>
            {this.props.text}
          </div>
          <div className={styles.arrow}>
            <Image  src="/Arrow.svg"
                      alt="Next"
                      width={37}
                      height={22}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.logan} onClick={this.props.clickHandler}>
          <div className={styles.text}>
            {this.props.text}
          </div>
        </div>
      );
    }
  }
}