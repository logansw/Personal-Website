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
        <div style={{ backgroundColor: this.props.color }} className={styles.colorSplash}/>
        <div className={styles.main}>
          <section className={styles.header}>
            <Image  src={this.props.img}
                    alt={this.props.title}
                    width={80}
                    height={80}/>
            <div className={styles.titlePair}>
              <h1 className={styles.h1}>{this.props.title}</h1>
              <h3 className={styles.h3}>{this.props.date}</h3>
            </div>
            <div className={styles.close} onClick={this.props.closePopup}>
              <Image  src="/x.svg"
                      alt="Close"
                      width={40}
                      height={40}/>
            </div>
          </section>
          <section className={styles.body}>
            {this.props.children}
          </section>
        </div>
      </div>
    );
  }
}