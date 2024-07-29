import type { Metadata } from 'next';
import './globals.css';
import { montserratFont } from '@/app/fonts';
import { client } from '@/lib/client';
import userQuery from '@/app/_query';
import { MultipleImageData } from '@/interfaces/imageData';

export async function generateMetadata(): Promise<Metadata> {
    const data = (
        await client.query({
            query: { ...userQuery },
        })
    ).data;

    const { meta } = data.landingPages.data[0].attributes;

    const ogImages = meta.og.images.data.map((image: MultipleImageData) => {
        const { width, height, alternativeText, url } = image.attributes;
        return {
            url,
            width,
            height,
            alt: alternativeText,
        };
    });

    return {
        title: meta.title,
        description: meta.description,
        openGraph: {
            title: meta.og.title,
            description: meta.og.description,
            siteName: meta.og.siteName,
            locale: meta.og.locale,
            images: ogImages,
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={montserratFont.className}>{children}</body>
        </html>
    );
}
