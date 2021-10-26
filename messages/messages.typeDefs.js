import { gql } from "apollo-server";

export default gql`
  type Message {
    id: Int!
    text: String!
    user: User!
    room: Room!
    read: Boolean!
    createdAt: String!
    updatedAt: String!
  }
  
  type Room {
    id: Int!
    text: String!
    users: [User]
    messages: [Message]
    unreadTotal: Int!
    createdAt: String!
    updatedAt: String!
  }
`;
