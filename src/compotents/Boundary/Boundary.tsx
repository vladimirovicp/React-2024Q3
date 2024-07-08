import { Component } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './Boundary.ptops';
import './Boundary.css';

class Boundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="main__boundary">
          Something went wrong... Please reload the page.
        </main>
      );
    }
    return this.props.children;
  }
}

export default Boundary;
