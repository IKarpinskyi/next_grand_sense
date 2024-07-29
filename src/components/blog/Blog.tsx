import React, { FC } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomParagraph from '@/components/shared/CustomParagraph';
import CustomTitle from '@/components/shared/CustomTitle';
import { BlogType } from '@/interfaces/blogBlock';
import ImageHelpers from '@/helpers/imageHelpers';
import Image from 'next/image';

export interface BlogProps {
    blog: BlogType;
}

const Blog: FC<BlogProps> = ({ blog }) => {
    const blogImage = blog.image.data.attributes;
    return (
        <div
            className={
                'lg:w-full xl:w-full md:w-full w-96 rounded-3xl bg-white'
            }>
            <Image
                src={ImageHelpers.resolveImage(blogImage.url)}
                alt={'Empty'}
                width={blogImage.width}
                height={blogImage.height}></Image>

            <div className={'flex flex-col px-5'}>
                <CustomParagraph className={'mt-3'}>
                    {blog.timeToReadInMinutes} хв читати
                </CustomParagraph>

                <CustomTitle className={'mt-3'}>{blog.title}</CustomTitle>
                <CustomParagraph className={'mt-3'}>
                    {blog.content}
                </CustomParagraph>

                <CustomTitle
                    className={'my-3'}
                    style={{ fontSize: '1rem' }}>
                    <button>
                        Докладніше{' '}
                        <NavigateNextIcon style={{ color: '#024344' }} />
                    </button>
                </CustomTitle>
            </div>
        </div>
    );
};
export default Blog;
