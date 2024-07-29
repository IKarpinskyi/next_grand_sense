import Image from "next/image"

export const Card: React.FC<any> = ({ heading, description, image, button }) => {
    return (
        <div  className="container flex flex-col gap-5 rounded-3xl bg-white py-5">
            <div className="flex flex-row justify-between lg:flex-col-reverse lg:gap-3">
                <p className="w-1/2 text-2xl leading-tight lg:w-full">{heading}</p>
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${image?.data?.attributes?.url ?? '/'}`}
                    alt="image"
                    width={image?.data?.attributes?.width ?? 1000}
                    height={image?.data?.attributes?.height ?? 1000}
                />
            </div>
            <p className="text-sm leading-tight">{description}</p>
            <button className="mt-auto rounded-full bg-slate-100 py-2">{button?.title}</button>
        </div>
    )
}
