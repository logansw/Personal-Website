import React from "react";
import styles from './Text.module.css';

/**
 * TEXT COMPONENT
 * Used for text of course!
 *
 * All Text components have two properties: text and textType.
 *  - |text| is the actual content which is rendered to the page (string)
 *  - |textType?| is the style in which it is rendered (TextType)
 *  - |color?| is the color of the text (EasyColor)
 *
 * Example:
 *  <Text text='My crow is named michael' textType='micro'/>
 *
 *  This renders to the page "My crow is named michael" in micro-styled font 🙂
 *
 * Notes:
 *  n/a
 *
 * TODOs:
 *  - Update font to new styles (Nunito)
 */

type TextType = "h1" | "h2" | "h3" | "body" | "large" | "small" | "micro" | "link" | "input" | "action" | "action_small";
type EasyColor = "Darker Green" | "Dark Green" | "Green" | "Orange" | "White" | "Black" | "Gray";
type TextAlign = "left" | "right" | "center" | "justify";

interface Props {
    textType?: TextType,
    color?: EasyColor,
    textAlign?: TextAlign;
}

export default class Text extends React.Component<Props> {
    render() {
        // Array to carry styles to apply at end
        var arr = [];

        // Color switch
        switch(this.props.color) {
            case 'Darker Green':
                arr.push(styles.darker_green);
                break;
            case 'Dark Green':
                arr.push(styles.dark_green);
                break;
            case 'Green':
                arr.push(styles.green);
                break;
            case 'Orange':
                arr.push(styles.orange);
                break;
            case 'White':
                arr.push(styles.white);
                break;
            case 'Black':
                arr.push(styles.black);
                break;
            case 'Gray':
                arr.push(styles.gray);
                break;
            default:
                // Do not overwrite with any color
                break;
        }

        //Text Align switch
        switch(this.props.textAlign) {
            case 'left':
                arr.push(styles.left);
                break;
            case 'right':
                arr.push(styles.right);
                break;
            case 'center':
                arr.push(styles.center);
                break;
            case 'justify':
                arr.push(styles.justify);
                break;
            default:
                // Do not overwrite with any color
                break;
        }

        // Text Type switch
        switch (this.props.textType) {
            case 'h1':
                arr.push(styles.h1);
                return (
                    <h1 className={arr.join(' ')}>
                        {this.props.children}
                    </h1>
                );
            case 'h2':
                arr.push(styles.h2);
                return (
                    <h2 className={arr.join(' ')}>
                        {this.props.children}
                    </h2>
                );
            case 'h3':
                arr.push(styles.h3);
                return (
                    <h3 className={arr.join(' ')}>
                        {this.props.children}
                    </h3>
                );
            case 'body':
                arr.push(styles.body);
                return (
                    <p className={arr.join(' ')}>
                        {this.props.children}
                    </p>
                );
            case 'small':
                arr.push(styles.small);
                return (
                    <div className={arr.join(' ')}>
                        {this.props.children}
                    </div>
                );
            case 'micro':
                arr.push(styles.micro);
                return (
                    <div className={arr.join(' ')}>
                        {this.props.children}
                    </div>
                );
            case 'large':
                arr.push(styles.large);
                return (
                    <p className={arr.join(' ')}>
                        {this.props.children}
                    </p>
                );
            case 'link':    // TODO: This one should probably be an <a href=''> right?
                arr.push(styles.link);
                return (
                    <div className={arr.join(' ')}>
                        {this.props.children}
                    </div>
                );
            case 'input':
                arr.push(styles.input);
                return (
                    <div className={arr.join(' ')}>
                        {this.props.children}
                    </div>
                );
            case 'action':
                arr.push(styles.action);
                return (
                    <div className={arr.join(' ')}>
                        {this.props.children}
                    </div>
                );
            case 'action_small':
                arr.push(styles.action_small);
                return (
                    <div className={arr.join(' ')}>
                        {this.props.children}
                    </div>
                );
            default:
                arr.push(styles.body);
                return (
                    <p className={arr.join(' ')}>
                        {this.props.children}
                    </p>
                );
        }
    }
}