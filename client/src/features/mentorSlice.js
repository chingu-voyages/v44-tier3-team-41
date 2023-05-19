import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const mentorSlice = createSlice({
  name: "mentor",
  initialState,
  reducers: {
    FETCH_MENTORS: (state, action) => {
      state = action.payload;
    },
  },
});

export const { FETCH_MENTORS } = mentorSlice.actions;

export default mentorSlice.reducer;
