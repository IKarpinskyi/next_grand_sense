export interface Step {
    id: number;
    title: string;
    content: string;
}

export interface ReceivingGrantBlock {
    title: string;
    description: string;
    mobileText: string;
    steps: Step[];
}
