import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/Slices/todoSlice";
import { v4 as uuidv4 } from "uuid"; // uuid library  generate a new unique ID every time the component mounts

function InputTask() {
  const [input, setinput] = useState("");
  const isThemeLight = useSelector((store) => store.todo.isThemeLight);
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();

    if (!input == "") {
      let todoText = input;
      dispatch(
        addTodo({
          text: todoText,
          isCompleted: false,
          id: uuidv4(),
        })
      );
      setinput("");
    } 
  };
  return (
    <div className="flex gap-2">
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          placeholder="Write your task here"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          className={isThemeLight ? "text-black" : "text-white"}
        />
        <button className="px-4 py-1 rounded-md" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTask;
