import { createSlice } from "@reduxjs/toolkit";

// [ step 5]  create app slice store and create actions

const appSlice = createSlice({
  name: "chat",
  initialState: {
    roomId: null,
  },

  reducers: {
    enterRoomFuction: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export default appSlice.reducer;

export const { enterRoomFuction } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;
