import React from "react";

interface Props {
  height?: number,
  width?: number
}

export default class Gap extends React.Component<Props> {
  render() {
    let gapStyle = {
      width: this.props.width + 'px',
      height: this.props.height + 'px'
    }
    return (
      <div style={gapStyle} />
    );
  }
}