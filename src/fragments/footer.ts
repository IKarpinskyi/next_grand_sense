import { imgData } from '@/fragments/imgData';

export const footer = `
{
  logo ${imgData}
  slogan
  copyright
  polices {
    name
    link
  }
  address {
    title
    location
    button {
        name
        link
        logo ${imgData}
    }
  }
  contacts {
    title
    phone
    email
    buttons {
        id
        name
        link
        logo ${imgData}
    }
  }
  services {
      id
      value
  }
  grants {
      id
      value
  }      
  usageRules {
    name
    link
  }
  socialMedia {
    id
    name
    link
    logo ${imgData}
  }
}
`;
