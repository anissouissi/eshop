import { gql } from 'graphql-request';

export const GET_USERS = gql`
  query getUsers {
    findAllUsers {
      id
      name
      email
    }
  }
`;
