import type { Metadata } from 'next';
import './globals.css';
import { montserratFont } from '@/app/fonts';

export const metadata: Metadata = {
    title: 'Grand Sense',
    description: 'Grand Sense appllication',
};

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
