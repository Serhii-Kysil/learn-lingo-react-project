import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import css from "./BookingForm.module.css";

const schema = yup.object().shape({
  reason: yup.string().required("Please select a reason"),
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
});

export const BookingForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    onClose();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.formCont}>
      <div className={css.radioBlock}>
        <label>
          <input
            type="radio"
            value="Career and business"
            {...register("reason")}
            className={css.radioInput}
          />
          <span className={css.inputSpan}></span>
          Career and business
        </label>
        <label>
          <input
            type="radio"
            value="Lesson for kids"
            {...register("reason")}
            className={css.radioInput}
          />
          <span className={css.inputSpan}></span>
          Lesson for kids
        </label>
        <label>
          <input
            type="radio"
            value="Living abroad"
            {...register("reason")}
            className={css.radioInput}
          />
          <span className={css.inputSpan}></span>
          Living abroad
        </label>
        <label>
          <input
            type="radio"
            value="Exams and coursework"
            {...register("reason")}
            className={css.radioInput}
          />
          <span className={css.inputSpan}></span>
          Exams and coursework
        </label>
        <label>
          <input
            type="radio"
            value="Culture, travel or hobby"
            {...register("reason")}
            className={css.radioInput}
          />
          <span className={css.inputSpan}></span>
          Culture, travel or hobby
        </label>
        {errors.reason && <p className={css.error}>{errors.reason.message}</p>}
      </div>

      <div className={css.userDataBlock}>
        <div className={css.nameBlock}>
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName")}
            className={css.dataInput}
          />
          {errors.fullName && (
            <p className={css.error}>{errors.fullName.message}</p>
          )}
        </div>

        <div className={css.emailBlock}>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className={css.dataInput}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
        </div>

        <div className={css.phoneBlock}>
          <input
            type="text"
            placeholder="Phone number"
            {...register("phoneNumber")}
            className={css.dataInput}
          />
          {errors.phoneNumber && (
            <p className={css.error}>{errors.phoneNumber.message}</p>
          )}
        </div>
      </div>

      <button type="submit" className={css.bookBtn}>
        Book
      </button>
    </form>
  );
};
