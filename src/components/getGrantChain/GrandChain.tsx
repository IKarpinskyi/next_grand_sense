import React, { FC } from 'react';
import { Step as StepProps } from '@/interfaces/receivingGrantBlock';
import { Step } from '@/components/getGrantChain/Step';
import { StepLg } from '@/components/getGrantChain/StepLg';

interface GrandChainProps {
    steps: StepProps[];
}

const GrandChain: FC<GrandChainProps> = ({ steps }) => {
    return (
        <div>
            <div className={'block lg:hidden'}>
                <div className={'border-l-2 border-dashed border-light-blue'}>
                    {steps.slice(0, steps.length - 1).map((step, index) => (
                        <div key={step.id}>
                            <Step step={step}></Step>
                        </div>
                    ))}
                </div>
                <div className={'border-l-2 border-dashed border-white'}>
                    <Step step={steps[steps.length - 1]}></Step>
                </div>
            </div>

            <div className={'hide lg:block'}>
                {Array.from(Array(Math.round(steps.length / 6))).map(
                    (_, index) => (
                        <div key={index}>
                            <div
                                className={`border-${index % 2 === 0 ? 'r' : 'l'}-2 border-y-2 border-dashed border-light-blue rounded-r-full flex flex-row flex-wrap`}>
                                {steps
                                    .slice(index * 3, (index + 1) * 3)
                                    .map((step) => (
                                        <div
                                            key={step.id}
                                            className={'w-1/3'}>
                                            <StepLg step={step}></StepLg>
                                        </div>
                                    ))}
                            </div>

                            <div className={'flex flex-row-reverse flex-wrap'}>
                                {steps
                                    .slice((index + 1) * 3, (index + 2) * 3)
                                    .map((step) => (
                                        <div
                                            key={step.id}
                                            className={'w-1/3'}>
                                            <StepLg step={step}></StepLg>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
};

export default GrandChain;
