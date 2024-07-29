import CustomParagraph from '@/components/shared/CustomParagraph';
import CustomTitle from '@/components/shared/CustomTitle';
import { FC } from 'react';

interface BlockHeadingProps {
    title: string;
    mobileText: string;
}

export const BlockHeadingMobileOnly: FC<BlockHeadingProps> = ({ title, mobileText }) => {
    return (
        <div
            className={
                'flex flex-row items-center justify-between gap-6 md:hidden md:justify-center'
            }>
            <CustomTitle className={'md:text-3xl lg:text-4xl xl:text-5xl '}>
                {title}
            </CustomTitle>

            <CustomParagraph
                className={
                    'text-right text-sm opacity-50 md:hidden lg:text-2xl'
                }>
                {mobileText}
            </CustomParagraph>
        </div>
    );
};
