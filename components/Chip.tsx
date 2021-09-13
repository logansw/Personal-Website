import React from "react";
import styles from "./Chip.module.css";

interface Props {
  text: string,
}

export default class Chip extends React.Component<Props> {
  render() {
    return (
      <div className={styles.chip}>
        {this.props.text}
      </div>
    );
  }
}