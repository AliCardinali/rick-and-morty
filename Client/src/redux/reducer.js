import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAVORITE: {
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    }

    case FILTER:
      const allCharsFiltered = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharsFiltered,
      };

    case ORDER: {
      if (action.payload === "Ascendente") {
        return {
          ...state,
          myFavorites: state.allCharacters.sort((a, b) => {
            return a.id - b.id;
          }),
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.sort((a, b) => {
            return b.id - a.id;
          }),
        };
      }
    }

    default:
      return { ...state };
  }
};
export default rootReducer;
