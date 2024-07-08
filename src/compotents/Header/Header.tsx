import { Component } from 'react';
import Search from '../Search/Search';
import BoundaryButton from '../Boundary/BoundaryButton';

interface HeaderProps {
  onSearch: (newValue: string) => void;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <header>
        <div className="container">
          <Search onSearch={this.props.onSearch} />
          <BoundaryButton />
        </div>
      </header>
    );
  }
}

export default Header;
