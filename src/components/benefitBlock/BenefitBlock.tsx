import { benefitBlockType } from '@/interfaces/benefitBlockType';
import BlockHeading from '../shared/BlockHeading';
import { BenefitCard } from './BenefitCard';

type BenefitBlockProps = {
    data: benefitBlockType;
};

export const BenefitBlock: React.FC<BenefitBlockProps> = ({ data }) => {
    return (
        <>
            <BlockHeading
                title={data.heading}
                mobileText={data.description}
            />

            <div className="py-4" />

            <div className="flex snap-x snap-mandatory flex-row gap-7 overflow-x-scroll lg:flex-wrap lg:overflow-auto">
                {data?.benefitCard?.map((data) => (
                    <BenefitCard
                        key={data.id}
                        data={data}
                    />
                ))}
            </div>
        </>
    );
};
