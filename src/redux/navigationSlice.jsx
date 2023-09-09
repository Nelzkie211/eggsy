import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  nav: { value: "" },
};
const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    updateNav: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { updateNav } = navigationSlice.actions;
export const selectNavValue = (state) => state.nav.value;
export default navigationSlice.reducer;
