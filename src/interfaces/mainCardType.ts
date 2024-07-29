import { Button } from "./button";
import { ImageWrapper } from "./imageData";

export type MainCardType = {
    id: string;
    heading: string;
    description: string;
    image: ImageWrapper;
    button: Button;
}