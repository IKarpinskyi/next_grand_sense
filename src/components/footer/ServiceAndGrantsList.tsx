import React, { FC } from 'react';
import { FooterGrants, FooterService } from '@/interfaces/footerBlock';

interface ServiceAndGrantsListProps {
    title: string;
    arr: FooterService[] | FooterGrants[];
}

export const ServiceAndGrantsList: FC<ServiceAndGrantsListProps> = ({
    title,
    arr,
}) => {
    return (
        <div>
            <h1 className={'mb-2'}>{title}</h1>
            {arr.map((item) => (
                <p
                    key={item.id}
                    className={'opacity-70'}>
                    {item.value}
                </p>
            ))}
        </div>
    );
};
