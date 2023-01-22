import { createContext, useContext, useReducer } from "react";

export const DARK_MODE = "DARK";
export const LIGHT_MODE = "LIGHT";
export const TOOGLE_MODE = "TOOGLE";

const reducer = function (state, action) {
  switch (action.type) {
    case DARK_MODE:
      return { isDarkMode: true };
    case LIGHT_MODE:
      return { isDarkMode: false };
    case TOOGLE_MODE:
      return { isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

const initialState = { isDarkMode: false };

const ThemeContext = createContext();

export function useThemeContextProvider() {
  return useContext(ThemeContext);
}

function ThemeContextProvider({ children }) {
  const [themeMode, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ themeMode, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
