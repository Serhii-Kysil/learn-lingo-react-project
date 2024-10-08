/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as yup from "yup";
import css from "./LoginForm.module.css";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/Auth/operations";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required").min(8),
});

export const LoginForm = ({ onClose }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.inputsContainer}>
        <div className={css.inputWrapper}>
          <input
            {...register("email")}
            placeholder="Email"
            className={css.emailInput}
          />
          {errors.email && <p className={css.error}>{errors.email?.message}</p>}
        </div>

        <div className={css.inputWrapper}>
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
          {errors.password && (
            <p className={css.error}>{errors.password?.message}</p>
          )}
        </div>
      </div>
      <button type="submit" className={css.submitBtn}>
        Log In
      </button>
    </form>
  );
};
