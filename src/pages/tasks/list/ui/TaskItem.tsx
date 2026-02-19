import { Task, useDeleteTask, useUpdateTask } from "@entities/task";
import { Link } from "react-router-dom";

export const TaskItem = ({ task }: { task: Task }) => {
  const updateTask = useUpdateTask(task.id);
  const deleteTask = useDeleteTask(task.id);

  const handleToggle = () => {
    updateTask.mutate({
      owner: task.owner,
      description: task.description,
      due_date: task.due_date,
      completed: !task.completed,
    });
  };

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <span>{task.description}</span>
      <span>{task.due_date}</span>
      <button onClick={() => deleteTask.mutate()}>Удалить</button>
      <Link to={`/tasks/${task.id}/edit`}>Редактировать</Link>
    </div>
  );
};
