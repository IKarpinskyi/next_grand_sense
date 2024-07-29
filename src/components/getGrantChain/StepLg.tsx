import { Step as StepProps } from '@/interfaces/receivingGrantBlock';
import React, { FC } from 'react';
import CustomTitle from '@/components/shared/CustomTitle';
import CustomParagraph from '@/components/shared/CustomParagraph';

interface StepProp {
    step: StepProps;
}

export const StepLg: FC<StepProp> = ({ step }) => {
    return (
        <div className={'-translate-y-24'}>
            <CustomTitle className={'lg:text-3xl mr-10 min-h-20'}>
                {step.title}
            </CustomTitle>
            <div
                id="doot"
                className="-translate-x-3 bg-light-blue rounded-full p-1 w-10 h-10">
                <div className="p-1 bg-white w-full h-full rounded-full">
                    <div className="p-2.5 bg-light-blue w-full h-full rounded-full"></div>
                </div>
            </div>

            <CustomParagraph
                className={
                    'font-medium lg:text-md xl:text-xl mt-2 mb-12 mr-10'
                }>
                {step.content}
            </CustomParagraph>
        </div>
    );
};
