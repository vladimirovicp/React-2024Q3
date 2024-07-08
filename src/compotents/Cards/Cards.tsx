import { Component } from 'react';
import { CardParams } from '../../compotents/Card/Card.props';
import Card from '../Card/Card';
import './Cards.css';

type CardsListProps = {
  cards: CardParams[];
};

class Cards extends Component<CardsListProps> {
  renderContent() {
    if (this.props.cards.length > 0) {
      return this.props.cards.map((card, index) => (
        <Card key={index} itemData={card} />
      ));
    }

    return <p>{'Sorry, no items match your search...'}</p>;
  }

  render() {
    return (
      <div className="container">
        <div className="cards">{this.renderContent()}</div>
      </div>
    );
  }
}

export default Cards;
