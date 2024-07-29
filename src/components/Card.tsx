import imageHelpers from '@/helpers/imageHelpers';
import { MainCardType } from '@/interfaces/mainCardType';
import Image from 'next/image';
import CustomTitle from './shared/CustomTitle';

type CardProps = {
    data: MainCardType;
};

export const Card: React.FC<CardProps> = ({ data }) => {
    return (
        <div className="container flex flex-col gap-5 rounded-3xl bg-white py-5">
            <div className="flex flex-row justify-between lg:flex-col-reverse lg:gap-3">
                <CustomTitle className='w-4/5 text-xl lg:text-3xl leading-tight lg:w-full'>{data.heading}</CustomTitle>
                <Image
                    src={imageHelpers.resolveImage(
                        data.image.data.attributes.url,
                    )}
                    alt="image"
                    width={data.image.data.attributes.width}
                    height={data.image.data.attributes.height}
                    className='h-20 w-20 lg:h-24 lg:w-24'
                />
            </div>
            <p className="text-sm leading-tight">{data.description}</p>
            <button className="mt-auto rounded-full bg-slate-100 py-2">
                {data.button.title}
            </button>
        </div>
    );
};
