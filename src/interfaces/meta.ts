import { ImageArrayWrapper } from '@/interfaces/imageData';

interface OgMeta {
    title: string;
    description: string;
    siteName: string;
    locale: string;
    images: ImageArrayWrapper;
}

export interface MetaData {
    id: string;
    title: string;
    description: string;
    canonicalHref: string;
    og: OgMeta;
}
