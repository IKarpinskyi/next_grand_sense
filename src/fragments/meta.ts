import { imgData } from '@/fragments/imgData';

export const meta = `
{
          id
          title
          description
          canonicalHref
          og {
            title
            description
            siteName
            locale
            images ${imgData}
          }
        }
`;
