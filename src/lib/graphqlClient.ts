// lib/graphqlClient.ts
import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_API_ENDPOINT as string;
const token = process.env.NEXT_PUBLIC_HYGRAPH_TOKEN as string;

export const graphcms = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`,
  },
});
