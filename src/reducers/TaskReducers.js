const initialState = {
  // taskToUpdate: [],
  defaultTask: [
    {
      id: crypto.randomUUID(),
      title: "Integration API",
      description:
        "Connect an existing API to a third-party database using secure",
      tags: ["web", "python", "API"],
      priority: "High",
      isFavourite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Efficient Web API Connectivity in Python",
      description:
        "Connect an existing API to a third-party database using secure",

      tags: ["web", "react", "js"],
      priority: "High",
      isFavourite: true,
    },

    {
      id: crypto.randomUUID(),
      title: "Data Handling",
      description: "Integrate a web API with a third-party database using",
      tags: ["web", "react", "js"],
      priority: "High",
      isFavourite: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Learn React",
      description: "React is most popular library",
      tags: ["web", "react", "js"],
      priority: "High",
      isFavourite: true,
    },
  ],
};

const TaskReducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Task": {
      return {
        defaultTask: [...state.defaultTask, action.payload],
      };
      break;
    }

    case "Edit_Task":
      return {
        ...state,
        defaultTask: state.defaultTask.map((task) => {
          if (task.id == action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
      break;

    case "DELETE_TASK":
      return {
        ...state,
        defaultTask: state.defaultTask.filter(
          (task) => task.id !== action.payload.id
        ),
      };
      break;
    case "DELETE_All":
      return {
        ...state,
        defaultTask: [],
      };
    case "ADD_FAV":
      return {
        defaultTask: state.defaultTask.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, isFavourite: !task.isFavourite };
          } else return task;
        }),
      };
      break;
    case "SEARCH_TERM":
      return {
        ...state,
        defaultTask: state.defaultTask.filter((task) => {
          return task.title
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
      break;
    default:
      break;
  }
};

export { TaskReducer, initialState };
