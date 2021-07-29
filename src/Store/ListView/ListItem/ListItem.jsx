import { PropTypes } from 'prop-types';

import './ListItem.css'

export default function ListItem({item}) {
  const { name, price, color, img } = item
  return (
    <div className='Store-listView-ListItem'>
      <img src={img} alt='sneaker' className='Store-listView-ListItem-img'></img>
      <h2 className='Store-listView-ListItem-name'>{name}</h2>
      <span className='Store-listView-ListItem-color'>{color}</span>
      <span className='Store-listView-ListItem-price'>
        ${price}
      </span>
      <button className='Store-listView-ListItem-btn' type='button'>
        add to cart
      </button>
    </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.object,
}