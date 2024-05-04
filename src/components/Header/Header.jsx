import { useDispatch, useSelector } from "react-redux";
import { clearAllTodo, toggleTheme } from "../../store/Slices/todoSlice";

function Header() {
  const isThemeLight = useSelector((store) => store.todo.isThemeLight);

  const dispatch = useDispatch();
  return (
    <div className={` flex justify-between px-6 py-2 `}>
      <h1>TodoApp</h1>
      <div className="flex gap-2">
        <button
          className={`px-4 py-0.5 rounded-md  ${
            isThemeLight ? "text-white bg-black" : "text-black bg-white"
          } `}
          onClick={()=>{
            dispatch(clearAllTodo())
          }}
        >
          Clear all
        </button>

        <button
          className={`px-4 py-0.5 rounded-md  ${
            isThemeLight ? "text-white bg-black" : "text-black bg-white"
          } `}
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          {isThemeLight ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
}

export default Header;
