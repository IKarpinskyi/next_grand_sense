import { BenefitCardType } from '@/interfaces/benefitCardType';
import Image from 'next/image';
import React from 'react';

type BenefitCardProps = {
    data: BenefitCardType;
};

export const BenefitCard: React.FC<BenefitCardProps> = ({ data }) => {
    return (
        <div className="container relative flex min-w-64 snap-center flex-col gap-3 rounded-3xl bg-white py-5 lg:w-[30%]">
            <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${data.image.data.attributes.url ?? '/'}`}
                alt="image"
                width={data.image.data.attributes.width ?? 1000}
                height={data.image.data.attributes.height ?? 1000}
            />
            <p className="w-1/2 text-2xl leading-tight">{data.title}</p>
            <p className="text-sm leading-tight">{data.description}</p>
            <div className="absolute right-0 top-0">
                <div className="relative">
                    <p className="text-9xl text-black/10">{data.number}</p>
                    <div className="absolute top-0 h-full w-full bg-gradient-to-t from-white to-transparent" />
                </div>
            </div>
        </div>
    );
};
