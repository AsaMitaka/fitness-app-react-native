import { createSlice } from '@reduxjs/toolkit';

export const screensSlice = createSlice({
  name: 'screens',
  initialState: {
    firstScreen: false,
    secondScreen: false,
    thirdScreen: false,
  },
  reducers: {
    setFirstScreen: (state, action) => {
      state.firstScreen = true;
    },
    setSecondScreen: (state, action) => {
      state.secondScreen = true;
    },
    setThirdScreen: (state, action) => {
      state.thirdScreen = true;
    },
  },
});

export const { setFirstScreen, setSecondScreen, setThirdScreen } = screensSlice.actions;
export default screensSlice.reducer;
