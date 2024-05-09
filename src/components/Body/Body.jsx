import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import InputTask from "./InputTask";
import TaskList from "./TaskList";

function Body() {
  const isThemeLight = useSelector((store) => store.todo.isThemeLight);

  return (
    <div
      className={` font-bold flex flex-col justify-between h-full  ${
        isThemeLight ? "bg-white text-black " : "bg-black text-white"
      }`}
    >
      <div>
        <Header isThemeLight={isThemeLight} />

        <div className="max-w-[30rem] w-full mx-auto border rounded-md min-h-96 shadow-lg">
          <InputTask isThemeLight={isThemeLight} />
          <TaskList isThemeLight={isThemeLight} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Body;
