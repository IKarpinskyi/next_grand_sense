import { button } from '@/fragments/button';

export const faqBlock = `
{
  title
  mobileText
  questions {
    id
    question
    answer
    button ${button}
  }
}
`;
