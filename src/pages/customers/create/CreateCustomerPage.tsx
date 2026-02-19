import { Input } from "@shared/ui/Input";
import { useNavigate } from "react-router-dom";

import { useCreateCustomerForm } from "./model/useCreateCustomerForm";

const CreateCustomerPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, onSubmit, errors, mutation } =
    useCreateCustomerForm();

  return (
    <div>
      <h2>Create Customer</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="First name"
          id="first_name"
          register={register("first_name")}
          error={errors.first_name?.message}
        />
        <Input
          label="Last name"
          id="last_name"
          register={register("last_name")}
          error={errors.last_name?.message}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          register={register("email")}
          error={errors.email?.message}
        />
        <Input
          label="Phone"
          id="phone"
          register={register("phone")}
          error={errors.phone?.message}
        />
        <Input
          label="Street"
          id="street"
          register={register("street")}
          error={errors.street?.message}
        />
        <Input
          label="City"
          id="city"
          register={register("city")}
          error={errors.city?.message}
        />
        <Input
          label="State"
          id="state"
          register={register("state")}
          error={errors.state?.message}
        />
        <Input
          label="Zip"
          id="zip"
          register={register("zip")}
          error={errors.zip?.message}
        />
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

export default CreateCustomerPage;
