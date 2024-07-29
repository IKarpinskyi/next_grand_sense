import imageHelpers from '@/helpers/imageHelpers';
import { BenefitCardType } from '@/interfaces/benefitCardType';
import Image from 'next/image';
import React from 'react';
import CustomTitle from '../shared/CustomTitle';

type BenefitCardProps = {
    data: BenefitCardType;
};

export const BenefitCard: React.FC<BenefitCardProps> = ({ data }) => {
    return (
        <div className="container relative flex min-w-52 snap-center flex-col gap-5 rounded-3xl bg-white py-5 lg:w-[30%]">
            <Image
                src={imageHelpers.resolveImage(data.image.data.attributes.url)}
                alt="image"
                width={data.image.data.attributes.width}
                height={data.image.data.attributes.height}
            />
            <CustomTitle>{data.title}</CustomTitle>
            <p className="text-sm leading-tight">{data.description}</p>
            <div className="absolute right-0 top-0">
                <div className="relative">
                    <p className="text-9xl text-cyan-500/15">{data.number}</p>
                    <div className="absolute top-0 h-full w-full bg-gradient-to-t from-white to-transparent" />
                </div>
            </div>
        </div>
    );
};
