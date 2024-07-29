import { GrantTypeBlockType } from '@/interfaces/grantTypeBlockType';
import { Card } from './Card';
import BlockHeading from './shared/BlockHeading';

type GrantTypeBlockProps = {
    data: GrantTypeBlockType;
};

export const GrantTypeBlock: React.FC<GrantTypeBlockProps> = ({ data }) => {
    return (
        <>
            <BlockHeading
                title={data.heading}
                mobileText={data.description}
            />

            <div className="py-3" />

            {/* grant type block */}
            <div className="flex w-full flex-col gap-8 lg:flex-row">
                {data.mainCard.map((card) => (
                    <Card
                        key={card.id}
                        data={card}
                    />
                ))}
            </div>
        </>
    );
};
