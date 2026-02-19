import { LoginPage } from "@pages/auth/login";
import { Registration } from "@pages/auth/registration";
import { CreateCustomerPage } from "@pages/customers/create";
import { CreateDealPage, DealsPage, EditDealPage } from "@pages/deals";
import { MainPage } from "@pages/main";
import { CreateTaskPage } from "@pages/tasks/create";
import { EditTaskPage } from "@pages/tasks/edit";
import { TasksPage } from "@pages/tasks/list";
import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout";
import { AuthGuard } from "./providers/AuthGuard";
import { GuestGuard } from "./providers/GuestGuard";

export const router = createBrowserRouter([
  {
    element: <GuestGuard />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/registration", element: <Registration /> },
    ],
  },
  {
    element: <AuthGuard />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: "/", element: <MainPage /> },
          { path: "/deals", element: <DealsPage /> },
          { path: "/deals/create", element: <CreateDealPage /> },
          { path: "/deals/:id/edit", element: <EditDealPage /> },
          { path: "/customers/create", element: <CreateCustomerPage /> },
          { path: "/tasks", element: <TasksPage /> },
          { path: "/tasks/create", element: <CreateTaskPage /> },
          { path: "/tasks/:id/edit", element: <EditTaskPage /> },
        ],
      },
    ],
  },
]);
