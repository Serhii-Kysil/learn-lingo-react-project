import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "./RegistrationForm.module.css";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const RegistrationForm = ({ onClose }) => {
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
      <input {...register("name")} placeholder="Name" />
      <p className={css.error}>{errors.name?.message}</p>
      <input {...register("email")} placeholder="Email" />
      <p className={css.error}>{errors.email?.message}</p>
      <input {...register("password")} type="password" placeholder="Password" />
      <p className={css.error}>{errors.password?.message}</p>
      <button type="submit" className={css.submitBtn}>
        Sign Up
      </button>
    </form>
  );
};
