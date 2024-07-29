import { Contact as ContactsType } from '@/interfaces/footerBlock';
import React, { FC } from 'react';
import { LinkedTextButton } from '@/components/shared/LinkedTextButton';

interface ContactsProps {
    contacts: ContactsType;
}

export const Contacts: FC<ContactsProps> = ({ contacts }) => {
    return (
        <div>
            <h1 className={'text-lg'}>{contacts.title}</h1>
            <p className={'opacity-70'}>{contacts.phone}</p>
            <p className={'opacity-70'}>{contacts.email}</p>
            {contacts.buttons &&
                contacts.buttons.map((button) => (
                    <div
                        key={button.id}
                        className={'mt-2'}>
                        <LinkedTextButton
                            linkedButton={button}></LinkedTextButton>
                    </div>
                ))}
        </div>
    );
};
