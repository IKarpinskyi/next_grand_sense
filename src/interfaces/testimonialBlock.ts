import { ImageWrapper } from '@/interfaces/imageData';

interface Client {
    name: string;
    position: string;
    avatar: ImageWrapper;
}

export interface CommentType {
    id: number;
    rating: number;
    content: string;
    client: Client;
}

export interface TestimonialBlockType {
    title: string;
    comments: CommentType[];
    mobileText: string;
}
