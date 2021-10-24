const initialStates = {
  auth: false,
};

export const userReducer = (state = initialStates, result) => {
  const { type } = result;

  switch (type) {
    default:
      return state;
  }
};

export default userReducer;
