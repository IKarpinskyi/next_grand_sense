import { config } from '@/config/config';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: config.BASE_CMS_GRAPH_URL,
    }),
});
