import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Frame from "./components/HeroSection";
import TaskBoard from "./components/TaskBoard";
import { TaskerContext } from "./context";
import { TaskReducer, initialState } from "./reducers/TaskReducers";

function App() {
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  return (
    <>
      <div className="bg-[#191D26] font-[Inter] text-white">
        <Header />
        <Frame />
        <TaskerContext.Provider value={{ state, dispatch }}>
          <TaskBoard />
          <ToastContainer />
        </TaskerContext.Provider>
        <Footer />
      </div>
    </>
  );
}

export default App;
