export type Task = {
  id: number;
  owner: number;
  description: string;
  due_date: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

export type GetTasks = {
  tasks: Task[];
  total: number;
  page: number;
  pages: number;
};

export type UpdateTasksById = {
  message: string;
  task: Task;
};

export type CreateTaskRequest = {
  owner: number;
  description: string;
  due_date: string;
  completed: boolean;
};
