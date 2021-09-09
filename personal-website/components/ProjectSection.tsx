import React from "react"
import styles from "./ProjectSection.module.css";
import Link from "next/link";
import Image from "next/image";

type Size = "h2" | "h3";

interface Props {
  sectionHeader: string,
  sectionSize?: Size,
  callout?: boolean
}

export default class ProjectSection extends React.Component<Props> {
  render() {
    let header;
    switch (this.props.sectionSize) {
      case "h2":
        header = styles.h2;
        break;
      case "h3":
        header = styles.h3;
        break;
      default:
        header = styles.h2;
    }

    if (this.props.callout) {
      return (
        <div className={styles.callout}>
          <div className={styles.bar}/>
          <div className={styles.text}>
            <div className={header}>{this.props.sectionHeader}</div>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return (
        <section className={styles.section}>
          <div className={header}>{this.props.sectionHeader}</div>
          {this.props.children}
        </section>
      );
    }
  }
}