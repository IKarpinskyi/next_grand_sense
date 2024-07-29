import React, { FC } from 'react';
import CustomParagraph from '@/components/shared/CustomParagraph';
import GrandChain from '@/components/getGrantChain/GrandChain';
import { ReceivingGrantBlock as ReceivingGrantBlockType } from '@/interfaces/receivingGrantBlock';
import BlockHeading from '@/components/shared/BlockHeading';

interface GrandStepsProps {
    receivingGrantBlock: ReceivingGrantBlockType;
}

const ReceivingGrantBlock: FC<GrandStepsProps> = ({ receivingGrantBlock }) => {
    return (
        <div>
            <BlockHeading
                title={receivingGrantBlock.title}
                mobileText={receivingGrantBlock.title}
            />

            <CustomParagraph
                className={
                    'mt-5 sm:max-w-96 max-w-72 md:max-w-full md:text-center '
                }>
                {receivingGrantBlock.description}
            </CustomParagraph>

            <div className={'mt-32'}>
                <GrandChain steps={receivingGrantBlock.steps} />
            </div>
        </div>
    );
};

export default ReceivingGrantBlock;
