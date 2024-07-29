import { imgData } from '@/fragments/imgData';

export const readyForGrantBlock = `
{
  title
  content
  button {
    title
    type
  }
  bgMobileImage ${imgData}
  bgDesktopImage ${imgData}
  contentDesktopImage ${imgData}
}
`;
