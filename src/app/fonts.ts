import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

export const namuFont = localFont({ src: './_fonts/namu1750.ttf' });
export const montserratFont = Montserrat({
    subsets: ['latin'],
    weight: '500',
});
