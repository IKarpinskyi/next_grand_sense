import React, { FC } from 'react';
import CustomTitle from '@/components/shared/CustomTitle';
import CustomParagraph from '@/components/shared/CustomParagraph';
import { Step as StepProps } from '@/interfaces/receivingGrantBlock';

interface StepProp {
    step: StepProps;
}

export const Step: FC<StepProp> = ({ step }) => {
    return (
        <div className={'relative ml-8 -translate-y-8'}>
            <div
                id="doot"
                className="absolute -top-3 -left-16 bg-[#C0EAEA] rounded-full p-2.5 w-16 h-16 scale-[0.6]">
                <div className="p-2 bg-[#8BD5D6] w-full h-full rounded-full">
                    <div className="p-1.5 bg-[#29AFB1] w-full h-full rounded-full">
                        <div className="p-0.5 bg-white w-full h-full rounded-full">
                            <div className="p-1 bg-light-blue w-full h-full rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <CustomTitle className={'md:text-3xl'}>{step.title}</CustomTitle>

            <CustomParagraph className={'font-medium md:text-xl mb-5'}>
                {step.content}
            </CustomParagraph>
        </div>
    );
};
