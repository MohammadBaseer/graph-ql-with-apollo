import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const CountriesBeginWithTheLetterADocument = gql`
    query CountriesBeginWithTheLetterA {
  countries(filter: {continent: {regex: "^A"}}) {
    code
    name
    currency
  }
}
    `;

/**
 * __useCountriesBeginWithTheLetterAQuery__
 *
 * To run a query within a React component, call `useCountriesBeginWithTheLetterAQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesBeginWithTheLetterAQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesBeginWithTheLetterAQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesBeginWithTheLetterAQuery(baseOptions?: Apollo.QueryHookOptions<CountriesBeginWithTheLetterAQuery, CountriesBeginWithTheLetterAQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountriesBeginWithTheLetterAQuery, CountriesBeginWithTheLetterAQueryVariables>(CountriesBeginWithTheLetterADocument, options);
      }
export function useCountriesBeginWithTheLetterALazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesBeginWithTheLetterAQuery, CountriesBeginWithTheLetterAQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountriesBeginWithTheLetterAQuery, CountriesBeginWithTheLetterAQueryVariables>(CountriesBeginWithTheLetterADocument, options);
        }
export function useCountriesBeginWithTheLetterASuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CountriesBeginWithTheLetterAQuery, CountriesBeginWithTheLetterAQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountriesBeginWithTheLetterAQuery, CountriesBeginWithTheLetterAQueryVariables>(CountriesBeginWithTheLetterADocument, options);
        }
export type CountriesBeginWithTheLetterAQueryHookResult = ReturnType<typeof useCountriesBeginWithTheLetterAQuery>;
export type CountriesBeginWithTheLetterALazyQueryHookResult = ReturnType<typeof useCountriesBeginWithTheLetterALazyQuery>;
export type CountriesBeginWithTheLetterASuspenseQueryHookResult = ReturnType<typeof useCountriesBeginWithTheLetterASuspenseQuery>;
export type CountriesBeginWithTheLetterAQueryResult = Apollo.QueryResult<CountriesBeginWithTheLetterAQuery, CountriesBeginWithTheLetterAQueryVariables>;
export const GetAllCountriesDocument = gql`
    query GetAllCountries {
  countries {
    name
    code
    emoji
  }
}
    `;

/**
 * __useGetAllCountriesQuery__
 *
 * To run a query within a React component, call `useGetAllCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCountriesQuery, GetAllCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCountriesQuery, GetAllCountriesQueryVariables>(GetAllCountriesDocument, options);
      }
export function useGetAllCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCountriesQuery, GetAllCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCountriesQuery, GetAllCountriesQueryVariables>(GetAllCountriesDocument, options);
        }
export function useGetAllCountriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCountriesQuery, GetAllCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCountriesQuery, GetAllCountriesQueryVariables>(GetAllCountriesDocument, options);
        }
export type GetAllCountriesQueryHookResult = ReturnType<typeof useGetAllCountriesQuery>;
export type GetAllCountriesLazyQueryHookResult = ReturnType<typeof useGetAllCountriesLazyQuery>;
export type GetAllCountriesSuspenseQueryHookResult = ReturnType<typeof useGetAllCountriesSuspenseQuery>;
export type GetAllCountriesQueryResult = Apollo.QueryResult<GetAllCountriesQuery, GetAllCountriesQueryVariables>;
export type CountriesBeginWithTheLetterAQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CountriesBeginWithTheLetterAQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, name: string, currency?: string | null }> };

export type GetAllCountriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, code: string, emoji: string }> };
