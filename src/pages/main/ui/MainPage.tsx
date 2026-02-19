import { useCustomers } from "@entities/customer";
import { useDeals } from "@entities/deal";
import { useTasks } from "@entities/task";
import { Link } from "react-router-dom";

const MainPage = () => {
  const customers = useCustomers();
  const deals = useDeals();
  const tasks = useTasks();

  if (customers.isLoading || deals.isLoading || tasks.isLoading) {
    return <div>Loading...</div>;
  }

  if (customers.error || deals.error || tasks.error) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <section>
        <h2>Customers</h2>
        <Link to="/customers/create">
          <button>Create Customer</button>
        </Link>
        <ul>
          {customers.data?.data.customers.map((customer) => (
            <li key={customer.id}>
              {customer.first_name} {customer.last_name} — {customer.email}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Deals</h2>
        <ul>
          {deals.data?.data.deals.map((deal) => (
            <li key={deal.id}>
              {deal.address_city}, {deal.address_street} — {deal.progress}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Tasks</h2>
        <Link to="/tasks/create">
          <button>Create Task</button>
        </Link>
        <ul>
          {tasks.data?.data.tasks.map((task) => (
            <li key={task.id}>
              {task.description} — {task.completed ? "Done" : "Pending"}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MainPage;
