import { button } from './button';
import { imgData } from './imgData';

export const getGrantBlock = `
{
    id
    heading
    headingDescription
    title
    description
    image ${imgData}
    contactButton ${button}
    background ${imgData}
}
`;