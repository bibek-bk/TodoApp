import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleIsCompleted } from "../../store/Slices/todoSlice";

function TaskList({ isThemeLight }) {
  const todos = useSelector((store) => store.todo.todos);
  const dispatch = useDispatch();
  const handlDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="border-t-2 text-center py-2 w-full ">
      {todos?.length === 0 ? (
        <div>Added task will show here</div>
      ) : (
        <div className="flex flex-col-reverse">
          {todos?.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between px-4 items-center"
            >
              <div className="flex gap-2 my-2">
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => dispatch(toggleIsCompleted(todo.id))}
                />
                <p className={` flex-shrink-0 ${todo.isCompleted ? "line-through" : ""} px-6`}>
                  {todo.text}
                </p>
              </div>
              <button
                onClick={() => handlDelete(todo.id)}
                className={`px-4 py-0.5 rounded-md border-2  ${
                  isThemeLight ? "text-white bg-black " : "text-black bg-white"
                } `}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
