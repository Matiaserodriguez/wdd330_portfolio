function multiFilter(tasks, filter) {
  if (filter === "active") {
    const notCompleted = tasks.filter((task) => {
      if (!task.completed) {
        return task;
      }
    });
    return notCompleted;
  } else if (filter === "completed") {
    const completed = tasks.filter((task) => {
      if (task.completed === true) {
        return task;
      }
    });
    return completed;
  } else if (filter === "all") {
    return tasks;
  }
}

export default {
  multiFilter,
};
