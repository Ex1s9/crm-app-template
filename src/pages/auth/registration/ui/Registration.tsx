import { Input } from "@shared/ui/Input";
import { Link } from "react-router-dom";

import { useRegistrationForm } from "../model/useRegistrationForm";

const RegistrationForm = () => {
  const { register, handleSubmit, onSubmit, errors, mutation } =
    useRegistrationForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {mutation.isError && (
          <p style={{ color: "red" }}>Ошибка при регистрации</p>
        )}
        <Input
          label="First Name"
          id="firstName"
          error={errors.first_name?.message}
          register={register("first_name")}
        />
        <Input
          label="Last Name"
          id="lastName"
          error={errors.last_name?.message}
          register={register("last_name")}
        />
        <Input
          label="Email"
          id="email"
          error={errors.email?.message}
          register={register("email")}
        />
        <Input
          label="Password"
          id="password"
          error={errors.password?.message}
          register={register("password")}
        />
        <Input
          label="Confirm Password"
          id="confirmPassword"
          error={errors.confirmPassword?.message}
          register={register("confirmPassword")}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
