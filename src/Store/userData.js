import { createSlice } from "@reduxjs/toolkit";

const userData = createSlice({
  name: "userDetails",
  initialState: { userList: [] },
  reducers: {
    setUserList(state, action) {
      const newUsers = action.payload;
      state.userList = newUsers;
    },
    updateUserList(state, action) {
      const id = action.payload;
      const updatedUser = state.userList.map((user) => {
        if (user.id === +id) {
          if (user.like) {
            return { ...user, like: false };
          } else {
            return { ...user, like: true };
          }
        } else {
          return { ...user };
        }
      });
      state.userList = updatedUser;
    },

    deleteUserList(state, action) {
      const deleteId = action.payload;

      const filteredData = state.userList?.filter(
        (user) => user.id !== +deleteId
      );

      state.userList = filteredData;
    },

    updateEditedUser(state, action) {
      const editedUser = action.payload;
      console.log("edited", editedUser);
      state.userList = editedUser;
    },
  },
});

export const userDataActions = userData.actions;

export default userData;
