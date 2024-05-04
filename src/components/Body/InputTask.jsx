import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/Slices/todoSlice";
import { v4 as uuidv4 } from "uuid"; // uuid library  generate a new unique ID every time the component mounts

function InputTask({ isThemeLight }) {
  const [input, setinput] = useState("");
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
    <div className="flex gap-2 ">
      <form
        onSubmit={(e) => addTask(e)}
        className="border-2 border-black rounded-lg flex mx-auto my-2 "
      >
        <input
          type="text"
          placeholder="Write your task here"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          className={`focus:outline-none py-2 px-4 max-w-[20rem] sm:w-[20rem] text-black rounded-l-md `}
        />
        <button
          className={`px-4 py-0.5 rounded-r-md border-l-2 ${
            isThemeLight ? "text-white bg-black" : "text-black bg-white"
          } `}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTask;
