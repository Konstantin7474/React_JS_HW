const LIGHT = "LIGHT";
const DARK = "DARK";

export const light = () => ({ type: LIGHT });
export const dark = () => ({ type: DARK });

const initialState = {
  theme: LIGHT,
};

export const switchThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIGHT:
      return { ...state, theme: LIGHT };
    case DARK:
      return { ...state, theme: DARK };
    default:
      return state;
  }
};
