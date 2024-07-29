import { ImageWrapper } from '@/interfaces/imageData';
import { LinkedButton } from '@/interfaces/linkedButton';

interface Policy {
    name: string;
    link: string;
}

export interface Address {
    title: string;
    location: string;
    button: LinkedButton;
}

export interface Contact {
    title: string;
    phone: string;
    email: string;
    buttons: LinkedButton[];
}

interface UsageRule {
    name: string;
    link: string;
}

interface SocialMedia {
    id: number;
    name: string;
    link: string;
    logo: ImageWrapper;
}

export interface FooterService {
    id: number;
    value: string;
}

export interface FooterGrants {
    id: number;
    value: string;
}

export interface FooterBlock {
    logo: ImageWrapper;
    slogan: string;
    copyright: string;
    polices: Policy;
    address: Address;
    contacts: Contact;
    usageRules: UsageRule;
    socialMedia: SocialMedia[];
    services: FooterService[];
    grants: FooterGrants[];
}
