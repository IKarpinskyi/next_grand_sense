import React, { FC } from 'react';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CustomParagraph from '@/components/shared/CustomParagraph';
import { CommentType } from '@/interfaces/testimonialBlock';
import ImageHelpers from '@/helpers/imageHelpers';
import Image from 'next/image';

export interface CommentCardProps {
    comment: CommentType;
}

const CommentCard: FC<CommentCardProps> = ({ comment }) => {
    return (
        <div className={'rounded-2xl px-5 py-10 bg-white'}>
            <Rating
                name="text-feedback"
                value={comment.rating}
                readOnly
                style={{ color: '#29AFB1' }}
                precision={0.5}
                emptyIcon={
                    <StarIcon
                        style={{ opacity: 0.55 }}
                        fontSize="inherit"
                    />
                }
            />
            <CustomParagraph className={'my-2'}>
                {comment.content}
            </CustomParagraph>

            <div className={'flex flex-row mt-3 gap-3'}>
                <Image
                    src={ImageHelpers.resolveImage(
                        comment.client.avatar.data.attributes.url,
                    )}
                    width={54}
                    height={54}
                    alt={'Empty'}></Image>
                <div className={'flex flex-col justify-between'}>
                    <CustomParagraph className={''}>
                        {comment.client.name}
                    </CustomParagraph>
                    <CustomParagraph className={'opacity-70'}>
                        {comment.client.position}
                    </CustomParagraph>
                </div>
            </div>
        </div>
    );
};
export default CommentCard;
