import { imgData } from './imgData';

const benefitCard = `
{
    id
    title
    description
    image ${imgData}
    number
}
`;

export const benefitBlock = `
{
    heading
    description
    benefitCard ${benefitCard}
}
`;