import React from 'react';
import { MobilePhone } from '../types/mobilephone';

interface MobilePhoneProps {
    mobilephone: MobilePhone;
}

const MobilePhoneItem: React.FC<MobilePhoneProps> = ({ mobilephone }) => {
    return(
        <div>
            <h1>Mobile Phone Item here.</h1>
            <h2>{mobilephone.serial_number}</h2>
            <h2>{mobilephone.brand}</h2>
            <h2>{mobilephone.model}</h2>
            <h2>{mobilephone.price}</h2>
            <h2>{mobilephone.ram}</h2>
            <h2>{mobilephone.storage}</h2>
            <h2>{mobilephone.processor}</h2>
            <h2>{mobilephone.screen_size}</h2>
        </div>
    );
};

export default MobilePhoneItem;