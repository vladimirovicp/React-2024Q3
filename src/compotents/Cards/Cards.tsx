import { Component } from 'react';
import { CardParams } from '../../compotents/Card/Card.props';
import Card from '../Card/Card';
import './Cards.css';

type CardsListProps = {
  cards: CardParams[];
};

class Cards extends Component<CardsListProps> {
  render() {
    return (
      <div className="container">
        <div className="cards">
          {this.props.cards.length ? (
            this.props.cards.map((card, index) => (
              <Card key={index} itemData={card} />
            ))
          ) : (
            <p>Sorry, no items match your search...</p>
          )}
        </div>
      </div>
    );
  }
}

export default Cards;
