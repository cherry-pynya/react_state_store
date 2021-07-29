import { PropTypes } from 'prop-types';
import { useState } from 'react';

import IconSwitch from './IconSwitc/IconSwitch';
import CardsView from './CardsView/CardsView';
import ListView from './ListView/ListView';

import './Store.css'

export default function Store({products}) {
    const [icon, setIcon] = useState('view_list');
    const switchIcon = () => {
        if (icon === 'view_list') {
            setIcon('view_module');
        } else {
            setIcon('view_list');
        }
    }
    return (
        <div className='Store'>
            <IconSwitch icon={icon} onSwitch={switchIcon}/>
            {icon === 'view_list' ? <CardsView products={products} /> : <ListView products={products} />}
        </div>
    );
}

Store.propTypes = {
    products: PropTypes.array,
}