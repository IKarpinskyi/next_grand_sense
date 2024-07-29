import { gql } from '@apollo/client';
import { receivingGrantBlock } from '@/fragments/receivingGrantBlock';
import { readyForGrantBlock } from '@/fragments/readyForGrantBlock';
import { testimonialBlock } from '@/fragments/testimonialBlock';
import { faqBlock } from '@/fragments/faqBlock';
import { blogBlock } from '@/fragments/blogBlock';
import { footer } from '@/fragments/footer';

const userQuery = gql`
  query landingPage {
    landingPages {
      data {
        attributes {
          receivingGrantBlock ${receivingGrantBlock}
          readyForGrantBlock ${readyForGrantBlock}
          testimonialBlock ${testimonialBlock}
          faqBlock ${faqBlock}
          blogBlock ${blogBlock}
          footer ${footer}
        }
      }
    }
  }
`;

export default userQuery;
