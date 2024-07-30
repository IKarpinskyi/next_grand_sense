import userQuery from '@/app/_query';
import { BenefitBlock } from '@/components/benefitBlock/BenefitBlock';
import BlogBlock from '@/components/blog/BlogBlock';
import CallToGrantAction from '@/components/callForGrant/CallToGrantAction';
import FaqBlock from '@/components/faq/FaqBlock';
import Footer from '@/components/footer/Footer';
import { GetGrantBlock } from '@/components/GetGrantBlock';
import ReceivingGrantBlock from '@/components/getGrantChain/ReceivingGrantBlock';
import { GrantTypeBlock } from '@/components/GrantTypeBlock';
import { Header } from '@/components/Header';
import { HeroBlock } from '@/components/HeroBlock';
import { ServiceBlock } from '@/components/ServiceBlock';
import TestimonialBlock from '@/components/testimonial/TestimonialBlock';
import { client } from '@/lib/client';

export default async function Home() {
    const data = (
        await client.query({
            query: { ...userQuery },
        })
    ).data;

    const {
        header,
        heroBlock,
        serviceBlock,
        getGrantBlock,
        benefitBlock,
        grantTypeBlock,
        receivingGrantBlock,
        readyForGrantBlock,
        testimonialBlock,
        faqBlock,
        blogBlock,
        footer,
    } = data.landingPages.data[0].attributes;

    return (
        <>
            <Header data={header} />
            <main className={'container'}>
                <div className="h-20 lg:h-24" />

                <HeroBlock data={heroBlock} />

                <div className="py-4" />

                <ServiceBlock data={serviceBlock} />

                <div className="py-4" />

                <GetGrantBlock data={getGrantBlock} />

                <div className="pt-20" />

                <BenefitBlock data={benefitBlock} />

                <div className="pt-20" />

                <ReceivingGrantBlock
                    receivingGrantBlock={receivingGrantBlock}
                />

                <GrantTypeBlock data={grantTypeBlock} />

                <div className="pt-32" />
                <CallToGrantAction
                    readyForGrantBlock={readyForGrantBlock}></CallToGrantAction>
                <div className={'mt-20'}>
                    <TestimonialBlock
                        testimonialBlock={testimonialBlock}></TestimonialBlock>
                </div>
                <div className={'mt-24'}>
                    <FaqBlock faqBlock={faqBlock}></FaqBlock>
                </div>
                <div className={'mt-20 bg-[#EAF7F8] px-5'}>
                    <BlogBlock blogBlock={blogBlock}></BlogBlock>
                </div>
                <div className={'mt-32'}>
                    <Footer footer={footer}></Footer>
                </div>
            </main>
        </>
    );
}
