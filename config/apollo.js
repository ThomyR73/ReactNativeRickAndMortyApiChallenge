import { ApolloClient, InMemoryCache, HttpLink,  } from '@apollo/client';

import { relayStylePagination } from '@apollo/client/utilities';
import { FieldPolicy } from '@apollo/client/cache';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "https://rickandmortyapi.com/graphql",
    })
});

export default client