import imageHelpers from '@/helpers/imageHelpers';
import { GetGrantBlockType } from '@/interfaces/getGrantBlockType';
import Image from 'next/image';
import CustomTitle from './shared/CustomTitle';
import { namuFont } from '@/app/fonts';

type GetGrantBlockProps = {
    data: GetGrantBlockType;
};

export const GetGrantBlock: React.FC<GetGrantBlockProps> = ({ data }) => {
    return (
        <>
            <div className="container">
                <div className="space-y-3 border-l-4 border-teal-800 pl-5 lg:hidden">
                    <CustomTitle>{data.heading}</CustomTitle>
                    <p className="text-sm leading-tight">
                        {data.headingDescription}
                    </p>
                </div>
            </div>

            <div className="py-4" />

            <div className="flex flex-row lg:container lg:gap-10">
                <div className="hide flex-1 space-y-3 rounded-3xl bg-white px-10 py-5 pl-5 lg:block">
                    <CustomTitle className="text-5xl">
                        {data.heading}
                    </CustomTitle>

                    <p className="text-lg leading-tight">
                        {data.headingDescription}
                    </p>
                </div>
                <div className="container relative flex flex-1 flex-row overflow-hidden rounded-2xl bg-teal-500 py-5 lg:rounded-full">
                    <div className="hide flex-1 lg:block" />
                    <div className="flex w-[60%] flex-col gap-3 text-white lg:flex-1">
                        <p className="w-1/2 text-2xl leading-tight lg:w-full">
                            {data.title}
                        </p>
                        <p className="text-sm leading-tight">
                            {data.description}
                        </p>
                        <button
                            className={`mt-2 rounded-3xl bg-white px-5 py-2 text-lg text-light-blue lg:w-fit ${namuFont.className}`}>
                            {data.contactButton.title}
                        </button>
                    </div>
                    <Image
                        src={imageHelpers.resolveImage(
                            data.image.data.attributes.url,
                        )}
                        alt="image"
                        width={data.image.data.attributes.width}
                        height={data.image.data.attributes.width}
                        className="absolute bottom-0 right-0 lg:left-10"
                    />
                </div>
            </div>
        </>
    );
};
