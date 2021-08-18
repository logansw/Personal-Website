import React from "react"
import styles from "./ProjectPage.module.css";
import Link from "next/link";
import Image from "next/image";

interface Props {
  img: string,
  title: string,
  date: string,
  color: string,
  closePopup: () => void
}

export default class ProjectPage extends React.Component<Props> {
  render() {
    return (
      <div className={styles.projectPage}>
        <div className={styles.header}>
          <Image  src={this.props.img}
                  alt={this.props.title}
                  width={80}
                  height={80}/>
          <div className={styles.titlePair}>
            <h1>{this.props.title}</h1>
            <h3>{this.props.date}</h3>
          </div>
          <div className={styles.close} onClick={this.props.closePopup}>
            <Image  src="/x.svg"
                    alt="Close"
                    width={24}
                    height={24}/>
          </div>
        </div>
      </div>
    );
  }
}