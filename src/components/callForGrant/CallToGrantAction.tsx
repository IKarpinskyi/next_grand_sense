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
                className={'block sm:hidden relative py-10 pl-5 rounded-3xl'}>
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
                        className={`mt-7 p-5 text-light-blue  bg-white text-lg rounded-3xl ${namuFont.className}`}>
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
                    'overflow-hidden mx-10 px-10 rounded-full hide sm:flex relative flex-row justify-around'
                }>
                <div className={''}>
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
                <div className={'w-7/12 flex flex-col self-center'}>
                    <div
                        className={
                            'flex flex-row justify-between items-center gap-10 lg:text-lg'
                        }>
                        <CustomTitle
                            className={'2xl:text-3xl'}
                            isNotTransparent={true}
                            style={{ color: 'white' }}>
                            {readyForGrantBlock.title}
                        </CustomTitle>
                        <button
                            className={`mt-7 p-5 text-light-blue  bg-white text-lg rounded-3xl ${namuFont.className}`}>
                            {readyForGrantBlock.button.title}
                        </button>
                    </div>
                    <div className={'border border-white w-full my-5'}></div>
                    <CustomParagraph
                        className={`mt-7 text-white  2xl:text-2xl`}>
                        {readyForGrantBlock.content}
                    </CustomParagraph>
                </div>
            </section>
        </>
    );
};

export default CallToGrantAction;
