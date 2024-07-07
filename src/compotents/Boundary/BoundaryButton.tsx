import { Component } from 'react';

class BoundaryButton extends Component {
  state = {
    hasError: false,
  };

  handleClick = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Synthetic error');
    }
    return <button onClick={this.handleClick}>Generate error</button>;
  }
}

export default BoundaryButton;
