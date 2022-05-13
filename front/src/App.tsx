import { FormProvider } from "react-hook-form";
import { Form } from "./components/Molecules/Form";
import { NewTodo } from "./components/Pages/NewTodo";
import { Header } from "./components/Templates/Header";
import { Sidebar } from "./components/Templates/Sidebar";
import { TodoCard } from "./components/Templates/TodoCard";
import { TodosTable } from "./components/Templates/TodosTable";

function App() {
  return (
    <div className="w-full min-h-screen bg-white-100 ">
      <Header />
      <div className="flex row w-full h-full">
        <div className="w-1/5 mx-auto mt-10">
          <Sidebar />
        </div>
        <div className="w-4/5 mt-10">
          <div className="w-full inline-block">
            <Form />
            <TodoCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
