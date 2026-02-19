import { Input } from "@shared/ui/Input";
import { useNavigate } from "react-router-dom";

import { useCreateTaskForm } from "./model/useCreateTaskForm";

const CreateTaskPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, onSubmit, errors, mutation } =
    useCreateTaskForm();

  return (
    <div>
      <h2>Create Task</h2>
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
          {mutation.isPending ? "Creating..." : "Create"}
        </button>
        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
        {mutation.error && <p style={{ color: "red" }}>Ошибка при создании</p>}
      </form>
    </div>
  );
};

export default CreateTaskPage;
