import React, { FC } from 'react';
import CustomTitle from '@/components/shared/CustomTitle';
import CustomParagraph from '@/components/shared/CustomParagraph';

interface BlockHeadingProps {
    title: string;
    mobileText: string;
}

const BlockHeading: FC<BlockHeadingProps> = ({ title, mobileText }) => {
    return (
        <div
            className={
                'flex flex-row gap-6 justify-between md:justify-center items-center'
            }>
            <CustomTitle className={'md:text-3xl lg:text-4xl xl:text-5xl '}>
                {title}
            </CustomTitle>

            <CustomParagraph
                className={
                    'text-sm md:hidden lg:text-2xl opacity-50 text-right'
                }>
                {mobileText}
            </CustomParagraph>
        </div>
    );
};

export default BlockHeading;
