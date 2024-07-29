import { Address as AddressType } from '@/interfaces/footerBlock';
import React, { FC } from 'react';
import { LinkedTextButton } from '@/components/shared/LinkedTextButton';

interface AddressProps {
    address: AddressType;
}

export const Address: FC<AddressProps> = ({ address }) => {
    return (
        <div>
            <h1 className={'text-lg'}>{address.title}</h1>
            <p className={'opacity-70'}>{address.location}</p>
            <LinkedTextButton linkedButton={address.button}></LinkedTextButton>
        </div>
    );
};
