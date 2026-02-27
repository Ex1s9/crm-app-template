import { api } from "@shared/api";

import { CreateTaskDTO, GetTasksDTO, TaskDTO, UpdateTaskDTO } from "./types";

export const taskApi = {
  getTasks: () => api.get<GetTasksDTO>("/api/tasks"),
  getTaskById: (id: number) => api.get<TaskDTO>(`/api/tasks/${id}`),
  createTask: (data: CreateTaskDTO) =>
    api.post<UpdateTaskDTO>("/api/tasks", data),
  updateTask: (id: number, data: CreateTaskDTO) =>
    api.put<UpdateTaskDTO>(`/api/tasks/${id}`, data),
  deleteTask: (id: number) => api.delete(`/api/tasks/${id}`),
};
