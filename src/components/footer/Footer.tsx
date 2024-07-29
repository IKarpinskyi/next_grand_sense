import React, { FC } from 'react';
import { FooterBlock } from '@/interfaces/footerBlock';
import { ImageData } from '@/interfaces/imageData';
import Image from 'next/image';
import ImageHelpers from '@/helpers/imageHelpers';
import { Address } from '@/components/footer/Address';
import { Contacts } from '@/components/footer/Contacts';
import { ServiceAndGrantsList } from '@/components/footer/ServiceAndGrantsList';

interface LinkedLogoProps {
    href: string;
    logo: ImageData;
}

const LinkedLogo: FC<LinkedLogoProps> = ({ href, logo }) => {
    return (
        <a href={href}>
            <Image
                src={ImageHelpers.resolveImage(logo.url)}
                width={logo.width}
                height={logo.height}
                alt={'Empty'}></Image>
        </a>
    );
};

interface FooterProps {
    footer: FooterBlock;
}

const Footer: FC<FooterProps> = ({ footer }) => {
    const logo = footer.logo.data.attributes;
    return (
        <section className={'p-5 bg-white rounded-3xl'}>
            <div
                className={
                    'w-9/12 lg:w-full flex flex-col gap-5 lg:justify-between lg:flex-row'
                }>
                <div className={'flex flex-col '}>
                    <Image
                        src={ImageHelpers.resolveImage(logo.url)}
                        width={logo.width}
                        height={logo.height}
                        alt={'Empty'}></Image>
                    <p className={'opacity-70 mt-4'}>{footer.slogan}</p>
                    <div className={'mt-4 flex flex-row gap-4'}>
                        {footer.socialMedia.map((socialMediaLink) => (
                            <LinkedLogo
                                key={socialMediaLink.id}
                                href={socialMediaLink.logo.data.attributes.url}
                                logo={socialMediaLink.logo.data.attributes}
                            />
                        ))}
                    </div>
                </div>
                <div className={''}>
                    <Address address={footer.address}></Address>
                </div>
                <div className={''}>
                    <Contacts contacts={footer.contacts}></Contacts>
                </div>
                <div className={''}>
                    <ServiceAndGrantsList
                        title={'Сервіси'}
                        arr={footer.services}></ServiceAndGrantsList>
                </div>
                <div className={''}>
                    <ServiceAndGrantsList
                        title={'Гранти'}
                        arr={footer.grants}></ServiceAndGrantsList>
                </div>
            </div>
            <div
                className={
                    'lg:mx-5 mt-5 flex flex-col lg:flex-row lg:justify-between'
                }>
                <span className={'mb-3 opacity-60'}>{footer.copyright}</span>
                <div className={'flex flex-col lg:flex-row gap-3'}>
                    <a
                        href={footer.usageRules.link}
                        className={'opacity-60'}>
                        {footer.usageRules.name}
                    </a>
                    <a
                        href={footer.polices.link}
                        className={'opacity-60'}>
                        {footer.polices.name}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Footer;
