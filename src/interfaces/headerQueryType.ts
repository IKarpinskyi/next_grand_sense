import { Button } from "./button";
import { ImageWrapper } from "./imageData";

type Option = {
    title: string;
    link: string;
};

type HeaderItem = {
    title: string;
    option: Option[];
};

// TODO: write reusable styles for button


export type HeaderType = { 
    logo: ImageWrapper;
    hederItems: HeaderItem[];
    button: Button;
    mobileDescription: string;
    mobileImage: ImageWrapper;
    mobileButton: Button;
    mobileLogo: ImageWrapper;
};
