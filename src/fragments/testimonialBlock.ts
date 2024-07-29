import { imgData } from '@/fragments/imgData';

export const testimonialBlock = `
{
  title
  mobileText
  comments {
    id
    rating
    content
    client {
      name
      position
      avatar ${imgData}
    }
  }
}
`;
