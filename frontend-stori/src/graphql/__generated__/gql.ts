/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateNewsletter($input:CreateNewsletterInput!) {\n    createNewsletter(createNewsletterInput: $input) {\n      name\n      fileUrl\n      recipientsEmails\n    }\n  }\n": types.CreateNewsletterDocument,
    "\n  query FindNewsletters {\n    findNewsletters {\n      id\n      fileUrl\n      name\n      recipientsEmails\n      subject\n      sendAt\n      status\n      __typename\n    }\n  }\n": types.FindNewslettersDocument,
    "\n  query GetStatistics {\n    getStatistics{\n    emailsDelivered\n    recipientsQuantity\n    __typename\n  }\n  }\n": types.GetStatisticsDocument,
    "\n  mutation UnsubscribeMany($input:UnsubscribeManyInput!){\n  unsubscribeMany(unsubscribeManyInput:$input)\n}\n": types.UnsubscribeManyDocument,
    "\nquery FindSubscriptionsByEmail($email:String!){\n  findSubscriptionsByEmail(email: $email){\n    id\n    newsletter {\n      name\n    }\n    status\n  }\n}\n": types.FindSubscriptionsByEmailDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateNewsletter($input:CreateNewsletterInput!) {\n    createNewsletter(createNewsletterInput: $input) {\n      name\n      fileUrl\n      recipientsEmails\n    }\n  }\n"): (typeof documents)["\n  mutation CreateNewsletter($input:CreateNewsletterInput!) {\n    createNewsletter(createNewsletterInput: $input) {\n      name\n      fileUrl\n      recipientsEmails\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindNewsletters {\n    findNewsletters {\n      id\n      fileUrl\n      name\n      recipientsEmails\n      subject\n      sendAt\n      status\n      __typename\n    }\n  }\n"): (typeof documents)["\n  query FindNewsletters {\n    findNewsletters {\n      id\n      fileUrl\n      name\n      recipientsEmails\n      subject\n      sendAt\n      status\n      __typename\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetStatistics {\n    getStatistics{\n    emailsDelivered\n    recipientsQuantity\n    __typename\n  }\n  }\n"): (typeof documents)["\n  query GetStatistics {\n    getStatistics{\n    emailsDelivered\n    recipientsQuantity\n    __typename\n  }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UnsubscribeMany($input:UnsubscribeManyInput!){\n  unsubscribeMany(unsubscribeManyInput:$input)\n}\n"): (typeof documents)["\n  mutation UnsubscribeMany($input:UnsubscribeManyInput!){\n  unsubscribeMany(unsubscribeManyInput:$input)\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery FindSubscriptionsByEmail($email:String!){\n  findSubscriptionsByEmail(email: $email){\n    id\n    newsletter {\n      name\n    }\n    status\n  }\n}\n"): (typeof documents)["\nquery FindSubscriptionsByEmail($email:String!){\n  findSubscriptionsByEmail(email: $email){\n    id\n    newsletter {\n      name\n    }\n    status\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;