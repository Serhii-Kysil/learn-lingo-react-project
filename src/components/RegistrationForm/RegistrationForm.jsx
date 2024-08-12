/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as yup from "yup";
import css from "./RegistrationForm.module.css";

import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/Auth/operations";

const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(4),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required").min(8),
});

export const RegistrationForm = ({ onClose }) => {
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
    onClose();
    dispatch(registerUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.inputsContainer}>
        <div className={css.inputWrapper}>
          <input
            {...register("name")}
            placeholder="Name"
            className={css.nameInput}
          />
          {errors.name && <p className={css.error}>{errors.name?.message}</p>}
        </div>

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
        Sign Up
      </button>
    </form>
  );
};
