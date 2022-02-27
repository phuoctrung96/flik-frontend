const initialState = {
  userInfo: {},
};

export default function user(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
}
