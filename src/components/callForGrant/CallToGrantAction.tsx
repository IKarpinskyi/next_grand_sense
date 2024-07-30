import React, { FC } from 'react';
import CustomTitle from '@/components/shared/CustomTitle';
import CustomParagraph from '@/components/shared/CustomParagraph';
import { namuFont } from '@/app/fonts';
import { ReadyForGrantBlock } from '@/interfaces/readyForGrantBlock';
import Image from 'next/image';
import ImageHelpers from '@/helpers/imageHelpers';

interface CallToGrantActionProps {
    readyForGrantBlock: ReadyForGrantBlock;
}

const CallToGrantAction: FC<CallToGrantActionProps> = ({
    readyForGrantBlock,
}) => {
    return (
        <>
            <section
                style={{
                    background: `url(${ImageHelpers.resolveImage(readyForGrantBlock.bgMobileImage.data.attributes.url)}) no-repeat center center`,
                    backgroundSize: 'cover',
                }}
                className={'relative block rounded-3xl py-10 pl-5 sm:hidden'}>
                <div className={'w-1/2'}>
                    <CustomTitle
                        isNotTransparent={true}
                        style={{ color: 'white' }}>
                        {readyForGrantBlock.title}
                    </CustomTitle>
                    <CustomParagraph className={`mt-7 text-white`}>
                        {readyForGrantBlock.content}
                    </CustomParagraph>

                    <button
                        className={`mt-7 rounded-3xl bg-white  p-5 text-lg text-light-blue ${namuFont.className}`}>
                        {readyForGrantBlock.button.title}
                    </button>
                </div>
            </section>

            <section
                style={{
                    background: `url(${ImageHelpers.resolveImage(readyForGrantBlock.bgDesktopImage.data.attributes.url)}) no-repeat center center`,
                    backgroundSize: 'cover',
                }}
                className={
                    'hide relative mx-10 flex-row justify-around overflow-hidden rounded-full px-10 sm:flex'
                }>
                <div className={'self-end'}>
                    <Image
                        src={`${ImageHelpers.resolveImage(readyForGrantBlock.contentDesktopImage.data.attributes.url)}`}
                        width={
                            readyForGrantBlock.contentDesktopImage.data
                                .attributes.width
                        }
                        height={
                            readyForGrantBlock.contentDesktopImage.data
                                .attributes.height
                        }
                        alt={'Empty'}></Image>
                </div>
                <div className={'flex w-7/12 flex-col self-center'}>
                    <div
                        className={
                            'flex flex-row items-center justify-between gap-10 lg:text-lg'
                        }>
                        <CustomTitle
                            className={
                                'text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'
                            }
                            isNotTransparent={true}
                            style={{ color: 'white' }}>
                            {readyForGrantBlock.title}
                        </CustomTitle>
                        <button
                            className={`mt-7 rounded-3xl bg-white  p-5 text-lg text-light-blue ${namuFont.className}`}>
                            {readyForGrantBlock.button.title}
                        </button>
                    </div>
                    <div className={'my-5 w-full border border-white'}></div>
                    <CustomParagraph
                        className={`text-md mt-7 font-bold text-white  opacity-100 md:text-sm 2xl:text-2xl`}>
                        {readyForGrantBlock.content}
                    </CustomParagraph>
                </div>
            </section>
        </>
    );
};

export default CallToGrantAction;
