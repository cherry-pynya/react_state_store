import { PropTypes } from 'prop-types';

import ShopCard from './ShopCard/ShopCard';

import './CardsView.css';

export default function CardsView({products}) {
  return (
    <div className='Store-cardsView'>
      {products.map((el) => <ShopCard item={el} />)}
    </div>
  );
}

CardsView.propTypes = {
  products: PropTypes.array,
}