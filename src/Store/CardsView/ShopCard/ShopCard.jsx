import { PropTypes } from 'prop-types';

import './ShopCard.css';

export default function ShopCard({item}) {
  const { name, price, color, img } = item
  return (
    <div className='Store-cardsView-ShopCard'>
      <h2 className='Store-cardsView-ShopCard-name'>{name}</h2>
      <span className='Store-cardsView-ShopCard-color'>{color}</span>
      <img src={img} alt='sneaker' className='Store-cardsView-ShopCard-img'></img>
      <div className='Store-cardsView-ShopCard-btn-container'>
        <span className='Store-cardsView-ShopCard-price'>
          ${price}
        </span>
        <button className='Store-cardsView-ShopCard-btn' type='button'>
          add to cart
        </button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  item: PropTypes.object,
}