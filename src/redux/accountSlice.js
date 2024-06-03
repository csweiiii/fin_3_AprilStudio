import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  general: {
    name: "",
    email: "",
    adrs: "",
    tel: ""
  },
  login: {
    hasLogin: false,
  },
  likedProjects: [],
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setGeneralAccountInfo: (state, action) => {
      state.general = action.payload;
    },
    login: (state) => {
      state.login.hasLogin = true;
    },
    logout: (state) => {
      state.login.hasLogin = false;
    },
    addLike: (state, action) => {
      const project = action.payload;
      if (!state.likedProjects.find(item => item.title === project.title)) {
        state.likedProjects.push(project);
      }
    },
    removeLike: (state, action) => {
      state.likedProjects = state.likedProjects.filter(project => project.title !== action.payload.title);
    },
  },
});

export const selectGeneral = (state) => state.account.general;
export const selectHasLogin = (state) => state.account.login.hasLogin;
export const selectLikedProjects = (state) => state.account.likedProjects;

export const { setGeneralAccountInfo, login, logout, addLike, removeLike } = accountSlice.actions;

export default accountSlice.reducer;