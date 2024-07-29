import { Button } from '@/interfaces/button';

export interface FaqBlockQuestion {
    id: number;
    question: string;
    answer: string;
    button: Button;
}

export interface FaqBlock {
    title: string;
    questions: FaqBlockQuestion[];
    mobileText: string;
}
