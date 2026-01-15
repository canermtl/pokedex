import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({
    getPokemonDetails: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonList: builder.query({
      query: (limit = 1350) => `pokemon?limit=${limit}`,
    }),
  }),
});

export const { useGetPokemonDetailsQuery, useGetPokemonListQuery } = pokemonApi;
