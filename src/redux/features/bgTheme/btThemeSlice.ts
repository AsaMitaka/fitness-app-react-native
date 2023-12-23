import { createSlice } from '@reduxjs/toolkit';

export const bgThemeSlice = createSlice({
  name: 'bgTheme',
  initialState: {
    activeTheme: 'lightMode',
  },
  reducers: {
    setTheme: (state, action) => {
      switch (action.payload) {
        case 'lightMode':
          state.activeTheme = 'lightMode';
          break;
        case 'darkMode':
          state.activeTheme = 'darkMode';
          break;
        default:
          return state;
      }
    },
  },
});

export const { setTheme } = bgThemeSlice.actions;
export default bgThemeSlice.reducer;
