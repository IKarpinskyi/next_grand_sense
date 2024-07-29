'use client';

import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';

interface BlurContainerProps {
    length: number;
    children: ReactNode;
}

const BlurContainer: FC<BlurContainerProps> = ({ length, children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, clientWidth } = containerRef.current;
            const newIndex = Math.round(scrollLeft / (clientWidth / length));
            if (newIndex >= 0 && newIndex < length) {
                setActiveIndex(newIndex);
            }
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <div className={'relative flex flex-col'}>
            <div
                ref={containerRef}
                className={'overflow-auto flex flex-nowrap gap-5'}>
                {children}
                <div
                    style={{
                        background:
                            'linear-gradient(to left, rgba(227, 248, 248, 1), rgba(227, 248, 248, 0))',
                        minHeight: `${containerRef.current?.offsetHeight}px`,
                    }}
                    className={'absolute  blur-lg right-0 w-12 h-80'}></div>
            </div>

            <div className="flex gap-2 justify-center items-center mt-4">
                {Array.from({ length }).map((_, index) => (
                    <div
                        key={index}
                        className={`p-1 rounded-full ${index === activeIndex ? 'bg-light-blue' : 'bg-gray-400'}`}></div>
                ))}
            </div>
        </div>
    );
};

export default BlurContainer;
