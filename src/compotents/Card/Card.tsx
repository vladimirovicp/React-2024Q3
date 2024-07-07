import { Component } from 'react';
import { CardParams } from '../../compotents/Card/Card.props';
import './Card.css';

interface CardProps {
  itemData: CardParams;
}

class Card extends Component<CardProps> {
  render() {
    const { name, diameter, climate, terrain, population } =
      this.props.itemData;

    return (
      <div className="card">
        <h2 className="title">{name}</h2>
        <div className="subtitle">
          diameter: <span>{diameter}</span>
        </div>
        <div>
          climate: <span>{climate}</span>
        </div>
        <div>
          terrain: <span>{terrain}</span>
        </div>
        <div>
          population: <span>{population}</span>
        </div>
      </div>
    );
  }
}

export default Card;
