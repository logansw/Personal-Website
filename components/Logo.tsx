import React from "react";
import styles from "./Logo.module.css";
import Image from 'next/image'

export default class Logo extends React.Component {
  render() {
    return (
      <div className={styles.logo}>
        <div className={styles.png}>
          <Image  src="/Whaleshark Logo 2 Outline.svg"
                  alt="Whaleshark Logo"
                  layout="responsive"
                  width={100}
                  height={100}/>
        </div>
        <div className={styles.name}>LOGAN WANG</div>
      </div>
    );
  }
}
