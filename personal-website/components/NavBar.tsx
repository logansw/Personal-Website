import React from "react"
import styles from "./NavBar.module.css";
import Link from "next/link";
import Logo from "./Logo"
import Image from "next/image";

interface Props {
  active: Page
}

interface State {
  sidebar: boolean,
}

type Page = "about" | "stuff" | "contact";

export default class NavBar extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      sidebar: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  render() {
    return (
      <div className={styles.navBar}>
        <Logo/>
        <div className={styles.gap}/>
        <div className={this.state.sidebar ? styles.sidebarActive : styles.links}>
          <div className={styles.gap}/>
          <Link href="/">
            <a className={this.props.active == "about" ? styles.active : styles.link}>About</a>
          </Link>
          <Link href="/stuff">
            <a className={this.props.active == "stuff" ? styles.active : styles.link}>Stuff</a>
          </Link>
          <Link href="/contact">
            <a className={this.props.active == "contact" ? styles.active : styles.link}>Contact</a>
          </Link>
          <div className={styles.gap}/>
          <div className={styles.back} onClick={this.toggleSidebar}>
            <Image  src="/back.svg"
                    alt="Back"
                    width={24}
                    height={15}/>
          </div>
        </div>
        <div className={styles.menu} onClick={this.toggleSidebar}>
          <Image  src="/menu.svg"
                  alt="Hamburger Menu"
                  layout="responsive"
                  width={100}
                  height={100}/>
        </div>
        <div className={this.state.sidebar ? styles.dim : styles.none} onClick={this.toggleSidebar}/>
      </div>
    );
  }

  toggleSidebar() {
    this.setState((state) => {
      return {sidebar: !state.sidebar}
    });
  }
}