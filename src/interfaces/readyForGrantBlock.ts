import { Button } from '@/interfaces/button';
import { ImageWrapper } from '@/interfaces/imageData';

export interface ReadyForGrantBlock {
    title: string;
    content: string;
    button: Button;
    bgMobileImage: ImageWrapper;
    bgDesktopImage: ImageWrapper;
    contentDesktopImage: ImageWrapper;
}
