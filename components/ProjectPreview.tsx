import React from "react"
import styles from "./ProjectPreview.module.css";
import Link from "next/link";
import Image from "next/image";

interface Props {
  img: string,
  clickHandler?: any
}

export default class ProjectPreview extends React.Component<Props> {
  render() {
    return (
      <div className={styles.projectPreview} onClick={this.props.clickHandler}>
        <div className={styles.img}>
            <Image  src={this.props.img}
                    alt="Back"
                    width={200}
                    height={200}/>
        </div>
      </div>
    );
  }
}