import React, { FC } from 'react';
import CommentCard from '@/components/testimonial/CommentCard';
import BlurContainer from '@/components/shared/BlurContainer';
import { TestimonialBlockType } from '@/interfaces/testimonialBlock';
import BlockHeading from '@/components/shared/BlockHeading';

export interface TestimonialBlockProps {
    testimonialBlock: TestimonialBlockType;
}

const TestimonialBlock: FC<TestimonialBlockProps> = ({ testimonialBlock }) => {
    return (
        <div className={'mx-5'}>
            <BlockHeading
                title={testimonialBlock.title}
                mobileText={testimonialBlock.mobileText}
            />
            <div className={'mt-6'}>
                <BlurContainer length={testimonialBlock.comments.length}>
                    {testimonialBlock.comments.map((comment) => (
                        <div
                            key={comment.id}
                            className={
                                'flex-grow-0 flex-shrink-0 md:w-1/2 w-96'
                            }>
                            <CommentCard comment={comment} />
                        </div>
                    ))}
                </BlurContainer>
            </div>
        </div>
    );
};

export default TestimonialBlock;
