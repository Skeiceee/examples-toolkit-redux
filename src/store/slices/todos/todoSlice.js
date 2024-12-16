import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    increment: (state, /* action */ ) => {
      state.counter += 1;
    },
  }
});

export const { increment } = todoSlice.actions

export default todoSlice.reducer