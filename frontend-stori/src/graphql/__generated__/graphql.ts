/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateNewsletterInput = {
  fileUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  recipientsEmails: Array<Scalars['String']['input']>;
  sendAt?: InputMaybe<Scalars['DateTime']['input']>;
  subject: Scalars['String']['input'];
};

export type GetStatisticsResponse = {
  __typename?: 'GetStatisticsResponse';
  emailsDelivered: Scalars['Float']['output'];
  recipientsQuantity: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNewsletter: NewsletterResponse;
  unsubscribeMany: Scalars['Boolean']['output'];
};


export type MutationCreateNewsletterArgs = {
  createNewsletterInput: CreateNewsletterInput;
};


export type MutationUnsubscribeManyArgs = {
  unsubscribeManyInput: UnsubscribeManyInput;
};

export type NewsletterResponse = {
  __typename?: 'NewsletterResponse';
  fileUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  recipientsEmails: Array<Scalars['String']['output']>;
  sendAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<NewsletterStatus>;
  subject: Scalars['String']['output'];
};

export enum NewsletterStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Sent = 'SENT'
}

export type Query = {
  __typename?: 'Query';
  findNewsletters: Array<NewsletterResponse>;
  findSubscriptionsByEmail: Array<SubscriptionResponse>;
  getStatistics: GetStatisticsResponse;
};


export type QueryFindSubscriptionsByEmailArgs = {
  email: Scalars['String']['input'];
};

export type SubscriptionResponse = {
  __typename?: 'SubscriptionResponse';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  newsletter: NewsletterResponse;
  status: SubscriptionStatus;
};

export enum SubscriptionStatus {
  Subscribed = 'SUBSCRIBED',
  Unsubscribed = 'UNSUBSCRIBED'
}

export type UnsubscribeManyInput = {
  subscriptionIds: Array<Scalars['String']['input']>;
};

export type CreateNewsletterMutationVariables = Exact<{
  input: CreateNewsletterInput;
}>;


export type CreateNewsletterMutation = { __typename?: 'Mutation', createNewsletter: { __typename?: 'NewsletterResponse', name: string, fileUrl: string, recipientsEmails: Array<string> } };

export type FindNewslettersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindNewslettersQuery = { __typename?: 'Query', findNewsletters: Array<{ __typename: 'NewsletterResponse', id: string, fileUrl: string, name: string, recipientsEmails: Array<string>, subject: string, sendAt?: any | null, status?: NewsletterStatus | null }> };

export type GetStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatisticsQuery = { __typename?: 'Query', getStatistics: { __typename: 'GetStatisticsResponse', emailsDelivered: number, recipientsQuantity: number } };

export type UnsubscribeManyMutationVariables = Exact<{
  input: UnsubscribeManyInput;
}>;


export type UnsubscribeManyMutation = { __typename?: 'Mutation', unsubscribeMany: boolean };

export type FindSubscriptionsByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type FindSubscriptionsByEmailQuery = { __typename?: 'Query', findSubscriptionsByEmail: Array<{ __typename?: 'SubscriptionResponse', id: string, status: SubscriptionStatus, newsletter: { __typename?: 'NewsletterResponse', name: string } }> };


export const CreateNewsletterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNewsletter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateNewsletterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNewsletter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createNewsletterInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"recipientsEmails"}}]}}]}}]} as unknown as DocumentNode<CreateNewsletterMutation, CreateNewsletterMutationVariables>;
export const FindNewslettersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindNewsletters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findNewsletters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"recipientsEmails"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"sendAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<FindNewslettersQuery, FindNewslettersQueryVariables>;
export const GetStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailsDelivered"}},{"kind":"Field","name":{"kind":"Name","value":"recipientsQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<GetStatisticsQuery, GetStatisticsQueryVariables>;
export const UnsubscribeManyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnsubscribeMany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnsubscribeManyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unsubscribeMany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"unsubscribeManyInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UnsubscribeManyMutation, UnsubscribeManyMutationVariables>;
export const FindSubscriptionsByEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindSubscriptionsByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findSubscriptionsByEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"newsletter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<FindSubscriptionsByEmailQuery, FindSubscriptionsByEmailQueryVariables>;