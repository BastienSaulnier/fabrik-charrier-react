const initialState = {
  isMenuOpen: false
};

function rootReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case "TOGGLE-MENU":
      return { isMenuOpen: !newState.isMenuOpen };
    default:
      return newState;
  }
}

export default rootReducer;
