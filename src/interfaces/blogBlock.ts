import { Button } from '@/interfaces/button';
import { ImageWrapper } from '@/interfaces/imageData';

export interface BlogType {
    id: number;
    title: string;
    content: string;
    timeToReadInMinutes: number;
    image: ImageWrapper;
    button: Button;
}

export interface BlogBlock {
    title: string;
    blogs: BlogType[];
    button: Button;
    mobileText: string;
}
