import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    error: null,
    status: 'idle',
    user: {
      email: '',
      password: '',
      username: 'User1',
      imgUrl:
        'https://static.wikia.nocookie.net/chainsaw-man/images/6/62/Asa_Mitaka_hunts_devils_for_the_Church.png/revision/latest',
      isPurchased: false,
      isStyle: null,
      weight: null,
      height: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setWeight: (state, action) => {
      state.user.weight = action.payload;
    },
    setHeight: (state, action) => {
      state.user.height = action.payload;
    },
    setPurchased: (state, action) => {
      state.user.isPurchased = action.payload;
    },
  },
});

export const { setUser, setWeight, setHeight, setPurchased } = userSlice.actions;
export default userSlice.reducer;
