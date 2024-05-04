import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleIsCompleted } from "../../store/Slices/todoSlice";
// import { useState } from "react";

function TaskList() {
  const todos = useSelector((store) => store.todo.todos);
const dispatch = useDispatch()
// const [isupdate, setisupdate] = useState(false)
const handlDelete = (id)=>{
  dispatch(deleteTodo(id))
}
// const handleUpate=()=>{

// }
  return (
    <div>
      {todos?.length === 0 ? (
        <div>Added task will show here</div>
      ) : (
        <div className="flex flex-col-reverse">
          {todos?.map((todo) => (
            <div key={todo.id} className="flex gap-2">
              <input type="checkbox" checked={todo.isCompleted} onChange={()=> dispatch(toggleIsCompleted(todo.id))} />
              <p className={todo.isCompleted? "line-through px-6":' px-6'}>{todo.text}</p>
              {/* <button onClick={()=>{
                setisupdate(!isupdate)
                set
              }}>{isupdate?'save':'update'}</button> */}
              <button onClick={()=>handlDelete(todo.id)}>delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
