const initialState = {
  isMenuOpen: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE-MENU":
      return { isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
}

export default rootReducer;
