// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const candidateProfileApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.arunarchitect.in/api' }),
  endpoints: (builder) => ({
    saveProfile: builder.mutation({
      query: (candidate) => {
        return {
          url: 'resume/',
          method: 'POST',
          body: candidate
        };
      }
    }),
    getResumeprofile: builder.query({
      query: () => {
        return {
          url: 'list/',
          method: 'GET',
        };
      }
    })
  }),
});

export const { useSaveProfileMutation, useGetResumeprofileQuery } = candidateProfileApi;
