import TestimonialBlock from '@/components/testimonial/TestimonialBlock';
import BlogBlock from '@/components/blog/BlogBlock';
import { client } from '@/lib/client';
import userQuery from '@/app/_query';
import ReceivingGrantBlock from '@/components/getGrantChain/ReceivingGrantBlock';
import FaqBlock from '@/components/faq/FaqBlock';
import CallToGrantAction from '@/components/callForGrant/CallToGrantAction';
import Footer from '@/components/footer/Footer';

export default async function Home() {
    const data = (
        await client.query({
            query: { ...userQuery },
        })
    ).data;

    const {
        receivingGrantBlock,
        readyForGrantBlock,
        testimonialBlock,
        faqBlock,
        blogBlock,
        footer,
    } = data.landingPages.data[0].attributes;

    return (
        <main>
            <div className={'mx-5'}>
                <ReceivingGrantBlock
                    receivingGrantBlock={
                        receivingGrantBlock
                    }></ReceivingGrantBlock>
            </div>
            <CallToGrantAction
                readyForGrantBlock={readyForGrantBlock}></CallToGrantAction>
            <div className={'mt-10'}>
                <TestimonialBlock
                    testimonialBlock={testimonialBlock}></TestimonialBlock>
            </div>
            <div className={'mt-10'}>
                <FaqBlock faqBlock={faqBlock}></FaqBlock>
            </div>
            <div className={'mt-10 bg-[#EAF7F8] px-5'}>
                <BlogBlock blogBlock={blogBlock}></BlogBlock>
            </div>
            <div className={'mt-20'}>
                <Footer footer={footer}></Footer>
            </div>
        </main>
    );
}
