import { gql } from "graphql-request";

export const SUBSCRIBE_NEWSLETTER = gql`
  mutation SubscribeNewsletter($email:String!) {
    createNewsletter(data: { email: $email }) {
      id
      email
    }
  }
`;
