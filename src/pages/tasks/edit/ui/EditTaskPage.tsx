import { useEffect } from "react";

import {
  TaskFormData,
  taskFormSchema,
  useTaskById,
  useUpdateTask,
} from "@entities/task";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@shared/ui/Input";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const EditTaskPage = () => {
  const { id } = useParams<{ id: string }>();
  const taskId = Number(id);
  const navigate = useNavigate();

  const task = useTaskById(taskId);
  const mutation = useUpdateTask(taskId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskFormSchema),
  });

  useEffect(() => {
    if (task) {
      reset({
        owner: task.owner,
        description: task.description,
        due_date: task.due_date.slice(0, 10),
        completed: task.completed,
      });
    }
  }, [task, reset]);

  const onSubmit = (formData: TaskFormData) => {
    mutation.mutate(
      { ...formData, due_date: new Date(formData.due_date).toISOString() },
      { onSuccess: () => navigate("/tasks") },
    );
  };

  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <h2>Edit Task #{taskId}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Owner ID"
          id="owner"
          type="number"
          register={register("owner")}
          error={errors.owner?.message}
        />
        <Input
          label="Description"
          id="description"
          register={register("description")}
          error={errors.description?.message}
        />
        <Input
          label="Due date"
          id="due_date"
          type="date"
          register={register("due_date")}
          error={errors.due_date?.message}
        />
        <label htmlFor="completed">
          <input type="checkbox" id="completed" {...register("completed")} />
          Completed
        </label>
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Saving..." : "Save"}
        </button>
        <button type="button" onClick={() => navigate("/tasks")}>
          Cancel
        </button>
        {mutation.isError && (
          <p style={{ color: "red" }}>Ошибка при сохранении</p>
        )}
      </form>
    </div>
  );
};

export default EditTaskPage;
