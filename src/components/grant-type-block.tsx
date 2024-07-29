import { GrantTypeBlockType } from '@/interfaces/grantTypeBlockType';
import { Card } from './card';

type GrantTypeBlockProps = {
    data: GrantTypeBlockType;
};

export const GrantTypeBlock: React.FC<GrantTypeBlockProps> = ({ data }) => {
    return (
        <div className="container">
            {/* grant type block / lg:hidden*/}
            <div className="flex flex-row items-center justify-between lg:hidden">
                <span className="w-1/2 text-3xl leading-tight">
                    {data.heading}
                </span>
                <span className="w-1/3 text-end text-lg leading-tight">
                    {data.description}
                </span>
            </div>
            <p className="hidden w-full text-center text-4xl lg:block">
                {data.heading}
            </p>

            <div className="py-2" />

            {/* grant type block */}
            <div className="flex w-full flex-col gap-8 lg:flex-row">
                {data.mainCard.map((card) => (
                    <Card
                        key={card.id}
                        heading={card.heading}
                        description={card.description}
                        image={card.image}
                        button={card.button}
                    />
                ))}
            </div>
        </div>
    );
};
