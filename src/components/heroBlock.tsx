
import { HeroBlockType } from '@/interfaces/heroBlockType';
import Image from 'next/image'


type HeroBlockProps = {
    data: HeroBlockType;
};

export const HeroBlock: React.FC<HeroBlockProps> = ({ data }) => {

    return (
        <>
            <div className="relative overflow-hidden rounded-3xl">
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${data?.image?.data?.attributes?.url ?? '/'}`}
                    alt="image"
                    width={data?.image?.data?.attributes?.width ?? 1000}
                    height={data?.image?.data?.attributes?.width ?? 1000}
                    className="h-[21rem] w-full object-cover object-right"
                />
                <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-teal-500/90 to-transparent" />
                <div className="container absolute bottom-5 text-white lg:bottom-10">
                    <p className="text-xl leading-tight lg:w-1/2 lg:text-4xl">{data?.heading}</p>
                </div>
            </div>
        </>
    )
}
