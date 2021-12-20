import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import * as pumpkinApi from "./pumpkin-api";
import * as messageBarSlice from "../features/message-bar/slice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [pumpkinApi.NAMESPACE]: pumpkinApi.reducer,
    [messageBarSlice.NAMESPACE]: messageBarSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    pumpkinApi.middleware,
  ],
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;