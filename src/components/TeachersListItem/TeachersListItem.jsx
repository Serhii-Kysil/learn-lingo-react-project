/* eslint-disable react/prop-types */
import css from "./TeachersListItem.module.css";

import { FiBookOpen } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

import { useState } from "react";

export const TeachersListItem = ({ teacher }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className={css.listItem}>
      <div className={css.imgCont}>
        <img
          src={teacher.avatar_url}
          alt="teacher avatar"
          className={css.img}
        />
      </div>
      <div className={css.infoBlock}>
        <div className={css.topBlock}>
          <div className={css.nameBlock}>
            <span className={css.span}>Languages</span>
            <p className={css.name}>{`${teacher.name} ${teacher.surname} `}</p>
          </div>
          <div className={css.topBar}>
            <div className={css.mainBar}>
              <div className={css.lessonsFormat}>
                <FiBookOpen className={css.bookIcon} />
                <p className={css.format}>Lessons online</p>
              </div>

              <span className={css.line}></span>

              <p className={css.lessonsDone}>
                Lessons done: {teacher.lessons_done}{" "}
              </p>

              <span className={css.line}></span>

              <div className={css.ratingBlock}>
                <IoStar className={css.starIcon} />
                <p>Rating: {teacher.rating}</p>
              </div>

              <span className={css.line}></span>

              <p className={css.price}>
                Price / 1 hour:{" "}
                <span className={css.priceSpan}>{teacher.price_per_hour}$</span>
              </p>
            </div>
            <FaRegHeart className={css.heart} />
          </div>
        </div>
        <div className={css.aboutBlock}>
          <p className={css.aboutSpeaks}>
            Speaks:{" "}
            <span className={css.aboutSpeaksSpan}>
              {teacher.languages.join(", ")}
            </span>
          </p>
          <p className={css.aboutLesson}>
            Lesson Info:{" "}
            <span className={css.aboutSpan}>{teacher.lesson_info}</span>
          </p>
          <p className={css.aboutCond}>
            Conditions:{" "}
            <span className={css.aboutSpan}>{teacher.conditions}</span>
          </p>
          {isExpanded && (
            <div className={css.expandedBlock}>
              <p className={css.expandedInfo}>{teacher.experience}</p>

              <div className={css.reviewsBlock}>
                {teacher.reviews.map((review, index) => (
                  <div key={index} className={css.review}>
                    <div className={css.avatarBlock}>
                      <img
                        src="/public/user.png"
                        alt="student"
                        className={css.studentAvatar}
                      />

                      <div className={css.nameBlock}>
                        <p className={css.reviewAuthor}>
                          {review.reviewer_name}
                        </p>
                        <p className={css.reviewRating}>
                          <IoStar className={css.reviewIcon} />{" "}
                          {review.reviewer_rating}.0
                        </p>
                      </div>
                    </div>

                    <p className={css.reviewText}>{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button className={css.loadMoreBtn} onClick={handleReadMoreClick}>
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    </li>
  );
};
