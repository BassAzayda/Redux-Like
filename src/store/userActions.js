export const userInitialState = {
  user: {
    loggedIn: false,
    username: "",
    password: ""
  }
};

export const userActions = {
  login: (state, payload) => {
    return { user: { ...state.user, loggedIn: true } };
  },
  logout: (state, payload) => {
    return { user: { ...state.user, loggedIn: false } };
  },
  updateUsername: (state, payload) => {
    return {
      ...state,
      user: {
      
        ...state.user,
        username: payload.username
      }
    };
  },
  updatePassword: (state, payload) => {
    console.log(payload);
    return {
      ...state,
      user: {
        ...state.user,
        password: payload.password
      }
    };
  }
};
