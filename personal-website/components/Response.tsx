import React from "react";
import styles from "./Response.module.css";
import Image from "next/image"

interface Props {
  text: string,
  clickHandler: any,
}

export default class Response extends React.Component<Props> {
  render() {
    return (
      <div className={styles.response} onClick={this.props.clickHandler}>
        {this.props.text}
      </div>
    );
  }
}