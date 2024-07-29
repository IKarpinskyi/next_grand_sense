'use client';

import React, { FC } from 'react';
import Blog from '@/components/blog/Blog';
import BlurContainer from '@/components/shared/BlurContainer';
import { BlogBlock as BlogBlockType } from '@/interfaces/blogBlock';
import BlockHeading from '@/components/shared/BlockHeading';

interface BlogComponentProps {
    blogBlock: BlogBlockType;
}

const BlogBlock: FC<BlogComponentProps> = ({ blogBlock }) => {
    return (
        <section className={'mb-5'}>
            <div className={'mb-7'}>
                <BlockHeading
                    title={blogBlock.title}
                    mobileText={blogBlock.mobileText}></BlockHeading>
            </div>

            <BlurContainer length={blogBlock.blogs.length}>
                {blogBlock.blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className={
                            'flex-grow-0 flex-shrink-0 md-1/3 ld:w-1/4 w-96'
                        }>
                        <Blog blog={blog} />
                    </div>
                ))}
            </BlurContainer>
        </section>
    );
};

export default BlogBlock;
