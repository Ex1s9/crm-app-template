import { useTasks } from "@entities/task";
import { Link } from "react-router-dom";

import { TaskItem } from "./TaskItem";

export const TasksPage = () => {
  const { data, isLoading } = useTasks();

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div>
        <Link to={"/tasks/create"}>
          <button>Create task</button>
        </Link>
        {data?.data.tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </div>
    </>
  );
};
