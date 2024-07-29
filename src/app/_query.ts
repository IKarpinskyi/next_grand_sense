import { gql } from '@apollo/client';
import { receivingGrantBlock } from '@/fragments/receivingGrantBlock';
import { readyForGrantBlock } from '@/fragments/readyForGrantBlock';
import { testimonialBlock } from '@/fragments/testimonialBlock';
import { faqBlock } from '@/fragments/faqBlock';
import { blogBlock } from '@/fragments/blogBlock';
import { footer } from '@/fragments/footer';
import { header } from '@/fragments/header';
import { heroBlock } from '@/fragments/heroBlock';
import { serviceBlock } from '@/fragments/serviceBlock';
import { getGrantBlock } from '@/fragments/getGrantBlock';
import { benefitBlock } from '@/fragments/benefitBlock';
import { grantTypeBlock } from '@/fragments/grantTypeBlock';
import { meta } from '@/fragments/meta';

const userQuery = gql`
  query landingPage {
    landingPages {
      data {
        attributes {
          title
          description

          header ${header}
          heroBlock ${heroBlock}
          serviceBlock ${serviceBlock}
          getGrantBlock ${getGrantBlock}
          benefitBlock ${benefitBlock}
          grantTypeBlock ${grantTypeBlock}

          receivingGrantBlock ${receivingGrantBlock}
          readyForGrantBlock ${readyForGrantBlock}
          testimonialBlock ${testimonialBlock}
          faqBlock ${faqBlock}
          blogBlock ${blogBlock}
          footer ${footer}
          meta ${meta}
        }
      }
    }
  }
`;

export default userQuery;

