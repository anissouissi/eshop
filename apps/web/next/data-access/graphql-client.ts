import { getGraphqlClient } from '@aso/data-access-graphql';

export const gql = getGraphqlClient('http://localhost:3000/graphql');
