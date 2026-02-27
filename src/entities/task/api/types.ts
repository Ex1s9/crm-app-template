export type TaskDTO = {
  id: number;
  owner: number;
  description: string;
  due_date: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

export type GetTasksDTO = {
  tasks: TaskDTO[];
  total: number;
  page: number;
  pages: number;
};

export type UpdateTaskDTO = {
  message: string;
  task: TaskDTO;
};

export type CreateTaskDTO = {
  owner: number;
  description: string;
  due_date: string;
  completed: boolean;
};
