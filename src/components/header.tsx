'use client';

import { HeaderType } from '@/interfaces/headerQueryType';
import { Transition } from '@headlessui/react';
import { ChevronDown, X } from 'lucide-react';
import Image from 'next/image';
import { memo, useCallback, useState } from 'react';
import { Show } from './showWhen';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './ui/accordion';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

type HeaderProps = {
    data: HeaderType;
};

export const Header: React.FC<HeaderProps> = memo(({ data }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClick = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <>
            {/* default menu */}
            <Transition
                show={!isOpen}
                enter="transition-opacity duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="fixed z-40 w-full">
                    <div className="container">
                        <div className="mt-5 flex flex-row justify-between overflow-hidden rounded-2xl bg-white shadow-sm">
                            {/* logo + button */}
                            <div className="flex w-full flex-row items-center justify-between px-2 py-2 lg:py-2">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_API_URL}${data?.logo.data?.attributes?.url ?? '/'}`}
                                    alt="logo"
                                    width={105}
                                    height={31}
                                    className="lg:h-11 lg:w-36"
                                />
                                <div className="hidden flex-row gap-10 lg:flex">
                                    {data.hederItems.map((headerItem) => (
                                        <Popover key={headerItem?.title}>
                                            <PopoverTrigger className="flex flex-row items-center gap-1">
                                                {headerItem?.title}
                                                <Show>
                                                    <Show.When
                                                        isTrue={
                                                            headerItem?.option
                                                                ?.length !== 0
                                                        }>
                                                        <ChevronDown />
                                                    </Show.When>
                                                </Show>
                                            </PopoverTrigger>
                                            <Show>
                                                <Show.When
                                                    isTrue={
                                                        headerItem?.option
                                                            ?.length !== 0
                                                    }>
                                                    <PopoverContent className="flex flex-col gap-3">
                                                        {headerItem?.option?.map(
                                                            (option) => (
                                                                <p
                                                                    key={
                                                                        option?.title
                                                                    }>
                                                                    {
                                                                        option?.title
                                                                    }
                                                                </p>
                                                            ),
                                                        )}
                                                    </PopoverContent>
                                                </Show.When>
                                            </Show>
                                        </Popover>
                                    ))}
                                </div>

                                <button className="rounded-full border-2 border-teal-500 px-2 text-teal-500 lg:bg-teal-500 lg:text-2xl lg:text-white">
                                    {data?.button?.title}
                                </button>
                            </div>
                            {/* menu burger / lg:hidden */}
                            <button
                                onClick={onClick}
                                className="flex h-11 w-11 flex-col justify-evenly bg-teal-500 p-2 text-white lg:hidden">
                                <div className="h-1 w-full rounded-xl bg-white" />
                                <div className="h-1 w-[66%] rounded-xl bg-white" />
                                <div className="h-1 w-[33%] rounded-xl bg-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </Transition>
            {/* active overlay */}
            <Transition
                show={isOpen}
                enter="transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="container absolute z-50 min-h-screen w-screen bg-teal-500">
                    {/* logo + Xmark */}
                    <div className="mt-5 flex flex-row justify-between">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}${data?.mobileLogo.data?.attributes?.url}`}
                            alt="logo"
                            width={105}
                            height={31}
                        />
                        <button
                            onClick={onClick}
                            className="text-white">
                            <X size={40} />
                        </button>
                    </div>
                    {/* menu options */}
                    <div className="mt-8 flex flex-col gap-5 text-white">
                        {data?.hederItems?.map((headerItem) => (
                            <Accordion
                                key={headerItem?.title}
                                type="single"
                                collapsible>
                                <AccordionItem value={headerItem?.title ?? ''}>
                                    <AccordionTrigger
                                        showChevron={
                                            headerItem?.option?.length !== 0
                                        }
                                        className="py-0 pb-3">
                                        {headerItem?.title}
                                    </AccordionTrigger>
                                    {headerItem?.option?.map((option) => (
                                        <AccordionContent key={option?.title}>
                                            {option?.title}
                                        </AccordionContent>
                                    ))}
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </Transition>
        </>
    );
});
Header.displayName = 'Header';
