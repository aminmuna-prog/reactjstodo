import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskerContext } from "../context";
import AddTaskModals from "./AddTaskModals";
import NoTaskFound from "./NoTaskFound";
import TaskActions from "./TaskActions";
import Tasklist from "./Tasklist";

export default function TaskBoard() {
  const { state, dispatch } = useContext(TaskerContext);
  const [showModals, setShowModals] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddEditTask(newTask, isAdd) {
    if (isAdd) {
      dispatch({
        type: "Add_To_Task",
        payload: {
          ...newTask,
        },
      });
      toast.success("The task has added successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      dispatch({
        type: "Edit_Task",
        payload: {
          ...newTask,
        },
      });
    }

    setShowModals(false);
  }

  function handleEdit(task) {
    setTaskToUpdate(task);
    setShowModals(true);
  }
  function handleDelete(task) {
    dispatch({
      type: "DELETE_TASK",
      payload: task,
    });
    toast.success("The task has deleted successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  function handleCloseClick() {
    setTaskToUpdate(null);
    setShowModals(false);
  }
  function handleALlDelete() {
    dispatch({
      type: "DELETE_All",
    });
    toast.success("All the task has deleted successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  function handleFavourite(task) {
    dispatch({
      type: "ADD_FAV",
      payload: task,
    });
  }
  return (
    <>
      <section className="mb-20" id="tasks">
        {showModals && (
          <AddTaskModals
            onSave={handleAddEditTask}
            onCloseClick={handleCloseClick}
            taskToUpdate={taskToUpdate}
          />
        )}
        <div className="container m-auto">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions
              onAddClick={() => setShowModals(true)}
              onDeleteAll={handleALlDelete}
            />
            {state.defaultTask.length > 0 ? (
              <Tasklist
                tasks={state.defaultTask}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onFav={handleFavourite}
              />
            ) : (
              <NoTaskFound />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
