const data = [
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
];

function getAllTasks() {
  return data;
}

export { getAllTasks };
