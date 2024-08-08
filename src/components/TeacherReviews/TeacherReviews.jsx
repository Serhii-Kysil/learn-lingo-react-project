import { IoStar } from "react-icons/io5";

import css from "./TeacherReviews.module.css";

export const TeacherReviews = ({ reviews }) => (
  <div className={css.reviewsBlock}>
    {reviews.map((review, index) => (
      <div key={index} className={css.review}>
        <div className={css.avatarBlock}>
          <img src="/user.png" alt="student" className={css.studentAvatar} />
          <div className={css.nameBlock}>
            <p className={css.reviewAuthor}>{review.reviewer_name}</p>
            <p className={css.reviewRating}>
              <IoStar className={css.reviewIcon} /> {review.reviewer_rating}.0
            </p>
          </div>
        </div>
        <p className={css.reviewText}>{review.comment}</p>
      </div>
    ))}
  </div>
);
