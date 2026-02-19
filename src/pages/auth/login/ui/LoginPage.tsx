import { Link } from "react-router-dom";

import { useLoginForm } from "../model/useLoginForm";

const LoginPage = () => {
  const { register, handleSubmit, onSubmit, errors, apiError } = useLoginForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {apiError && <p style={{ color: "red" }}>{apiError}</p>}
        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email?.message}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password?.message}
        <button type="submit">Login</button>
      </form>
      <p>
        Нет аккаунта? <Link to="/registration">Регистрация</Link>
      </p>
    </div>
  );
};

export default LoginPage;
