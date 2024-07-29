import { button } from './button';
import { imgData } from './imgData';

export const header = `
{
    logo ${imgData}
    hederItems {
        title
        option {
            title
            link
        }
    }
    button ${button}
    mobileDescription
    mobileImage ${imgData}
    mobileButton ${button}
    mobileLogo ${imgData}
}
`;