export interface ImageData {
    url: string;
    width: number;
    height: number;
    formats: any;
    previewUrl: string;
    alternativeText?: string;
}

export interface ImageWrapper {
    data: {
        attributes: ImageData;
    };
}

export interface MultipleImageData {
    attributes: ImageData;
}

export interface ImageArrayWrapper {
    data: MultipleImageData[];
}
