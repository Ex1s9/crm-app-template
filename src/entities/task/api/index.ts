import { api } from "@shared/api";

import {
  CreateTaskRequest,
  GetTasks,
  Task,
  UpdateTasksById,
} from "../model/types";

export const taskApi = {
  getTasks: () => api.get<GetTasks>("/api/tasks"),
  getTaskById: (id: number) => api.get<Task>(`/api/tasks/${id}`),
  createTask: (data: CreateTaskRequest) =>
    api.post<UpdateTasksById>("/api/tasks", data),
  updateTask: (id: number, data: CreateTaskRequest) =>
    api.put<UpdateTasksById>(`/api/tasks/${id}`, data),
  deleteTask: (id: number) => api.delete(`/api/tasks/${id}`),
};
