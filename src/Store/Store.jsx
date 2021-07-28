import { PropTypes } from 'prop-types';
import { useState } from 'react';

import IconSwitch from './IconSwitc/IconSwitch';

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
        </div>
    );
}

Store.propTypes = {
    products: PropTypes.array,
}