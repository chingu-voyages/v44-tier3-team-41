import { configureStore } from "@reduxjs/toolkit";
import mentorReducer from "../features/mentorSlice";

const store = configureStore({
  reducer: {
    mentor: mentorReducer,
  },
});

export default store;
