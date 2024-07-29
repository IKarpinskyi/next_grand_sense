import { ServiceBlockType } from '@/interfaces/serviceBlockType';
import React from 'react';
import { Card } from './Card';
import { BlockHeadingMobileOnly } from './shared/BlockHeadingMobileOnly';

type ServiceBlockProps = {
    data: ServiceBlockType;
};

export const ServiceBlock: React.FC<ServiceBlockProps> = ({ data }) => {
    return (
        <>
            <BlockHeadingMobileOnly
                title={data.title}
                mobileText={data.description}
            />

            <div className="py-2" />

            <div className="flex w-full flex-col gap-8 lg:flex-row">
                {data.mainCard.map((card) => (
                    <Card
                        key={card.id}
                        data={card}
                    />
                ))}
            </div>
        </>
    );
};
