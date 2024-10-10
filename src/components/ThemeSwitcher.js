import { useDispatch, useSelector } from "react-redux";
import { light, dark } from "../store/ThemeSwitcherReducer";

export const ThemeSwitcher = () => {
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    if (theme === "LIGHT") {
      dispatch(dark());
    } else {
      dispatch(light());
    }
  };

  return (
    <div className={theme === "LIGHT" ? "light-theme" : "dark-theme"}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quos ab
        maxime tenetur. Aspernatur distinctio commodi dolor sapiente quos
        consequuntur culpa maiores vel nihil! Iure dignissimos dolorum impedit
        laudantium tempora error, voluptatem nam consequuntur facilis eligendi
        enim dolore sed nisi, repudiandae nihil minima eveniet libero maxime
        neque veniam pariatur aperiam!
      </p>
      <button onClick={handleThemeToggle}>
        Switch to {theme === "LIGHT" ? "DARK" : "LIGHT"} Theme
      </button>
    </div>
  );
};
