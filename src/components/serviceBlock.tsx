import { ServiceBlockType } from '@/interfaces/serviceBlockType';
import React from 'react';
import { Card } from './card';

type ServiceBlockProps = {
    data: ServiceBlockType;
};

export const ServiceBlock: React.FC<ServiceBlockProps> = ({ data }) => {
    return (
        <>
            {/* service block / lg:hidden*/}
            <div className="flex flex-row items-center justify-between lg:hidden">
                <span className="w-1/2 text-3xl leading-tight">
                    {data?.title}
                </span>
                <span className="w-1/3 text-end text-lg leading-tight">
                    {data?.description}
                </span>
            </div>

            <div className="py-2" />

            {/* service block */}
            <div className="flex w-full flex-col gap-8 lg:flex-row">
                {data?.mainCard?.map((card) => (
                    <Card
                        key={card?.id}
                        heading={card?.heading}
                        description={card?.description}
                        image={card?.image}
                        button={card?.button}
                    />
                ))}
            </div>
        </>
    );
};
