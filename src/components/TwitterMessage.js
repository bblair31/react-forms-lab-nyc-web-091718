import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsLeft: this.props.maxChars,
      inputMessage: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      charsLeft: (this.props.maxChars - event.target.value.length),
      inputMessage: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} value={this.state.inputMessage}  />
        <p>Characters Left: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
