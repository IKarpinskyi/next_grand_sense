export interface ImageData {
    url: string;
    width: number;
    height: number;
    formats: any;
    previewUrl: string;
}

export interface ImageWrapper {
    data: {
        attributes: ImageData;
    };
}
