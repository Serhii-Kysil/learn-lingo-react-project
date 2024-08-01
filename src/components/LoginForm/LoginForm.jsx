import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as yup from "yup";
import css from "./LoginForm.module.css";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required").min(8),
});

export const LoginForm = ({ onClose }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

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
      <div className={css.inputsContainer}>
        <input
          {...register("email")}
          placeholder="Email"
          className={css.emailInput}
        />
        <p className={css.error}>{errors.email?.message}</p>

        <div className={css.passwordContainer}>
          <input
            {...register("password")}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            className={css.passwordInput}
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!isPasswordVisible)}
            className={css.eyeButton}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          >
            {isPasswordVisible ? (
              <FaEye className={css.eye} />
            ) : (
              <FaEyeSlash className={css.eye} />
            )}
          </button>
        </div>
        <p className={css.error}>{errors.password?.message}</p>
      </div>
      <button type="submit" className={css.submitBtn}>
        Log In
      </button>
    </form>
  );
};
