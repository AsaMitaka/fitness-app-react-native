import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import bgThemeReducer from '../features/bgTheme/btThemeSlice';
import screensReducer from '../features/screens/screensSlice';

const rootReducer = combineReducers({
  user: userReducer,
  screens: screensReducer,
  bgTheme: bgThemeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
