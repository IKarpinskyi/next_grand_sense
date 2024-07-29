import { imgData } from './imgData';

export const blogBlock = `
{
  title
  mobileText
  blogs {
    id
    title
    content
    timeToReadInMinutes
    image ${imgData}
    button {
      title
      type
    }
  }
  button {
    title
    type
  }
}
`;
