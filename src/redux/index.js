import { configureStore } from "@reduxjs/toolkit";

import FormSlice from "./form";

const store = configureStore({
  reducer: FormSlice.reducer,
});

export default store;
