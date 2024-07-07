import Header from '../../compotents/Header/Header';
import { Component } from 'react';
import { HomeProps, HomeState } from './Home.props';
import { CardParams, ResponseParams } from '../../compotents/Card/Card.props';
import Cards from '../../compotents/Cards/Cards';

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      cards: [],
      searchInput: null,
      isLoading: false,
    };
  }

  getSearchResult = async () => {
    this.setState({
      isLoading: true,
    });

    await this.fetchCards(this.state.searchInput);
  };

  fetchCards = async (searchText?: string | null) => {
    let url = `https://swapi.dev/api/planets/`;

    if (searchText && searchText.trim() !== '') {
      url += `?search=${searchText}`;
    }

    try {
      const response = await fetch(url);
      const data: ResponseParams = await response.json();
      const currentCards: CardParams[] = data.results;
      this.setState({ cards: currentCards });
      this.setState({ isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false });
    }
  };

  handleSearch = (newValue: string) => {
    this.setState({
      searchInput: newValue,
    });
  };

  componentDidMount() {
    const currentSearchValue: string | null =
      localStorage.getItem('search-input');
    this.setState({ searchInput: currentSearchValue || '' });
    if (currentSearchValue === '' || currentSearchValue === null) {
      this.getSearchResult();
    }
  }

  componentDidUpdate(
    _prevProps: Readonly<HomeProps>,
    prevState: Readonly<HomeState>
  ): void {
    if (this.state.searchInput !== prevState.searchInput) {
      this.getSearchResult();
    }
  }

  render() {
    return (
      <>
        <Header onSearch={this.handleSearch} />
        <main className="main">
          <Cards cards={this.state.cards} isLoading={this.state.isLoading} />
        </main>
      </>
    );
  }
}

export default Home;
