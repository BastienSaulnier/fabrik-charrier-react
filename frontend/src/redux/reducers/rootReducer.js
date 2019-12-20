const initialState = {
  isMenuOpen: false,
  filter: ""
};

function rootReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case "TOGGLE-MENU":
      return { isMenuOpen: !newState.isMenuOpen };
    case "BUFFETS":
      return { filter: "Buffets" };
    case "TABLES":
      return { filter: "Tables" };
    case "TABLES_BASSES":
      return { filter: "Tables Basses" };
    case "SECRETAIRES":
      return { filter: "Secretaires" };
    default:
      return newState;
  }
}

export default rootReducer;
