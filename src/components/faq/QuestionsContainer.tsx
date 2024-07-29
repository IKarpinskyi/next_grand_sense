'use client';

import React, { FC, useState } from 'react';
import QuestionCard from '@/components/faq/QuestionCard';
import { namuFont } from '@/app/fonts';
import { FaqBlockQuestion } from '@/interfaces/faqBlock';

export interface QuestionBlockProps {
    questions: FaqBlockQuestion[];
}

const QuestionsContainer: FC<QuestionBlockProps> = ({ questions }) => {
    const startPage = 1;
    const [page, setPage] = useState(startPage);
    const perPage = 4;

    const currentAmount = page * perPage;

    const handleShowMore = () => {
        setPage((prev) => prev + 1);
    };
    const handleHide = () => {
        setPage(startPage);
    };

    return (
        <div className={'flex flex-col'}>
            <div className={'grid grid-cols-1 gap-5 md:grid-cols-2'}>
                {questions &&
                    questions.slice(0, currentAmount).map((question) => (
                        <div key={question.id}>
                            <QuestionCard question={question}></QuestionCard>
                        </div>
                    ))}
            </div>
            <button
                className={`md:hidden text-lg mx-5 ${namuFont.className} text-light-blue`}
                onClick={
                    currentAmount >= questions.length
                        ? handleHide
                        : handleShowMore
                }>
                {currentAmount >= questions.length
                    ? 'Закрити'
                    : 'Ще питання та відповіді'}
            </button>
        </div>
    );
};
export default QuestionsContainer;
