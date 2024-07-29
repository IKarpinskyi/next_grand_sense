import { ImageWrapper } from "./imageData";

export type benefitBlockType = {
    heading: string;
    description: string;
    benefitCard: {
        id: string;
        title: string;
        description: string;
        image: ImageWrapper;
        number: number;
    }[];
}