import Header from '../../compotents/Header/Header';
import { Component } from 'react';
import { HomeProps, HomeState } from './Home.props';
import { CardParams, ResponseParams } from '../../compotents/Card/Card.props';
import Cards from '../../compotents/Cards/Cards';
import Preloader from '../../compotents/Preloader/Preloader';

const API_URL = 'https://swapi.dev/api/planets/';

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
    let url = API_URL;
    if (searchText && searchText.trim() !== '') {
      url = API_URL + `?search=${searchText}`;
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
    // Компонент смонтировался | единожды
    const currentSearchValue: string | null =
      localStorage.getItem('search-input');
    this.setState({ searchInput: currentSearchValue || '' });
    if (currentSearchValue === '' || currentSearchValue === null) {
      this.getSearchResult();
    }
  }

  componentDidUpdate(
    // Компонент обновился
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
          {this.state.isLoading ? (
            <Preloader />
          ) : (
            <Cards cards={this.state.cards} />
          )}
        </main>
      </>
    );
  }
}

export default Home;
