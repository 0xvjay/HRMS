const userType = {
  SET_TOKEN: "SET_TOKEN",
  REMOVE_TOKEN: "REMOVE_TOKEN",
};

export const setToken = () => {
  return {
    type: userType.SET_TOKEN,
  };
};

export const removeToken = () => {
  return {
    type: userType.REMOVE_TOKEN,
  };
};

const initialState = {
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userType.SET_TOKEN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case userType.REMOVE_TOKEN:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
