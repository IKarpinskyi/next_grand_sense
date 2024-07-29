'use client';

import React, { FC } from 'react';
import QuestionsContainer from '@/components/faq/QuestionsContainer';
import { FaqBlock as FaqBlockType } from '@/interfaces/faqBlock';
import BlockHeading from '@/components/shared/BlockHeading';

interface FaqComponentProps {
    faqBlock: FaqBlockType;
}

const FaqBlock: FC<FaqComponentProps> = ({ faqBlock }) => {
    return (
        <section className={'px-5 bg-white rounded-3xl pt-5 pb-3'}>
            <BlockHeading
                title={faqBlock.title}
                mobileText={faqBlock.mobileText}></BlockHeading>

            <div className={'my-7 mx-5'}>
                <QuestionsContainer
                    questions={faqBlock.questions}></QuestionsContainer>
            </div>
        </section>
    );
};

export default FaqBlock;
