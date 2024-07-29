import { benefitBlockType } from '@/interfaces/benefitBlockType';
import { BenefitCard } from './benefitCard';

type BenefitBlockProps = {
    data: benefitBlockType;
};

export const BenefitBlock: React.FC<BenefitBlockProps> = ({ data }) => {
    return (
        <>
            <div className="container">
                <div className="flex flex-row items-center justify-between lg:hidden">
                    <span className="w-1/2 text-3xl leading-tight">
                        {data?.heading}
                    </span>
                    <span className="w-1/3 text-end text-sm leading-tight">
                        {data?.description}
                    </span>
                </div>
                <p className="hidden w-full text-center text-4xl lg:block ">
                    {data?.heading}
                </p>
            </div>

            <div className="py-4" />

            <div className="flex snap-x snap-mandatory flex-row gap-8 overflow-x-scroll px-8 lg:container lg:flex-wrap lg:overflow-auto">
                {data?.benefitCard?.map((card) => (
                    <BenefitCard
                        key={card?.id}
                        data={card}
                    />
                ))}
            </div>
        </>
    );
};
