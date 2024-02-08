import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user_id: string | null;
  user_list: any[]; // Update this to the appropriate type
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    user_id: null,
    user_list: [],
  } as UserState, // Specify the type for initialState
  reducers: {
    authenticateUser: (state, action: PayloadAction<string>) => {
      state.user_id = action.payload;
    },
    addUserList: (state, action: PayloadAction<any>) => {
      state.user_list.push(action.payload);
    },
  },
});
export const { authenticateUser, addUserList } = userSlice.actions;
export default userSlice.reducer;
