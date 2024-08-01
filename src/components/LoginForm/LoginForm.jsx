import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "./LoginForm.module.css";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const LoginForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <input {...register("email")} placeholder="Email" />
      <p className={css.error}>{errors.email?.message}</p>
      <input {...register("password")} type="password" placeholder="Password" />
      <p className={css.error}>{errors.password?.message}</p>
      <button type="submit" className={css.submitBtn}>
        Log In
      </button>
    </form>
  );
};
