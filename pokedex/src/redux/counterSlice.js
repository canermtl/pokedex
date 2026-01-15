import { createSlice } from '@reduxjs/toolkit'

const POKEMONS_PER_PAGE = 20
const TOTAL_POKEMONS = 1350
const TOTAL_PAGES = Math.ceil(TOTAL_POKEMONS / POKEMONS_PER_PAGE)

const initialState = {
  value: 1,
  totalPages: TOTAL_PAGES,
  pokemonsPerPage: POKEMONS_PER_PAGE,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value < state.totalPages) {
        state.value += 1
      }
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value -= 1
      }
    },
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
