import Header from "../Header/Header";
import InputTask from "./InputTask";
import TaskList from "./TaskList";

function Body() {
  return (
    <>
      <Header />
      <div>
        <InputTask />
      </div>
      <div>
        <TaskList />
      </div>
    </>
  );
}

export default Body;
