import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './slices/counter/counterSlice'
import pokemonSlice from './slices/pokemon/pokemonSlice'
import { todosApi } from './api/todosApi'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokemons: pokemonSlice,
    [todosApi.reducerPath]: todosApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
})