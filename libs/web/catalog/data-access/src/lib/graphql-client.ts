import { getGraphqlClient } from '@aso/data-access-graphql';

export const gql = getGraphqlClient(import.meta.env.VITE_API_GATEWAY_URL);
