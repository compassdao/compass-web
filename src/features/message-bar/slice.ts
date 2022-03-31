import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSliceSelector } from "../../redux/utils";

export const NAMESPACE = "messageBar";

export type MessageBarState = {
  message: string;
  severity?: "error" | "warning" | "info" | "success";
  status: "close" | "open";
};

const initialState: MessageBarState = {
  message: "",
  severity: "info",
  status: "close",
};

const slice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    show: (
      state,
      action: PayloadAction<Pick<MessageBarState, "severity" | "message">>
    ) => {
      Object.assign(state, {
        status: "open",
        message: action.payload.message,
        severity: action.payload.severity || "info",
      });
    },
    hide: (state) => {
      Object.assign(state, {
        status: "close",
      });
    },
  },
});

export const reducer = slice.reducer;
export const { show: showMessageBar, hide: hideMessageBar } = slice.actions;
export const messageBarActions = slice.actions;
export const messageBarSelector =
  createSliceSelector<MessageBarState>(NAMESPACE);
