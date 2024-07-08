import React, { Component } from 'react';
import { SearchProps, SearchState } from './Search.props';
import './Search.css';

export class Search extends Component<SearchProps, SearchState> {
  state: SearchState = {
    inputValue: '',
  };

  handleInputChange = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    this.setState({
      inputValue: event.target.value,
    });
    localStorage.setItem('search-input', event.target.value.trim());
  };

  searchPlanet = () => {
    this.props.onSearch(this.state.inputValue.trim());
  };

  handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    this.props.onSearch(this.state.inputValue.trim());
  };

  componentDidMount() {
    const currentValue = localStorage.getItem('search-input');
    this.setState({ inputValue: currentValue || '' });
  }

  render() {
    return (
      <form className="search__form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        ></input>
        <button onClick={this.searchPlanet}>Search</button>
      </form>
    );
  }
}

export default Search;
