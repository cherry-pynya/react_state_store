import { PropTypes } from 'prop-types';

import ListItem from './ListItem/ListItem';

import './ListView.css'

export default function ListView({products}) {
  return (
    <div className='Store-listView'>
      {products.map((el) => <ListItem item={el} />)}
    </div>
  );
}

ListView.propTypes = {
  products: PropTypes.array,
}