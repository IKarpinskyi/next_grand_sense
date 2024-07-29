import React, { FC } from 'react';
import { LinkedButton } from '@/interfaces/linkedButton';
import Image from 'next/image';
import ImageHelpers from '@/helpers/imageHelpers';

interface LinkedTextButtonProps {
    linkedButton: LinkedButton;
}

export const LinkedTextButton: FC<LinkedTextButtonProps> = ({
    linkedButton,
}) => {
    const logo = linkedButton.logo.data.attributes;
    return (
        <a
            className={
                'overflow-hidden p-0 flex flex-row gap-2 border-2 border-light-blue rounded max-w-52'
            }
            href={linkedButton.link}>
            <Image
                className={'bg-light-blue'}
                src={ImageHelpers.resolveImage(logo.url)}
                width={logo.width}
                height={logo.height}
                alt={'Empty'}></Image>
            <p className={'text-light-blue text-sm'}>{linkedButton.name}</p>
        </a>
    );
};
