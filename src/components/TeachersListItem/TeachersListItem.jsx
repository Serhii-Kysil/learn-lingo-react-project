/* eslint-disable react/prop-types */
import css from "./TeachersListItem.module.css";

import { addFavorite, removeFavorite } from "../../redux/Teachers/TeacherSlice";

import { FiBookOpen } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimpleModal } from "../SimpleModal/SimpleModal";
import { BookingForm } from "../BookingForm/BookingForm";
import { selectIsLoggedIn } from "../../redux/Auth/selector";
import toast from "react-hot-toast";

export const TeachersListItem = ({ teacher }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalBookIsOpen, setModalBookOpen] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.teachers.favorite);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isFavorite = favorites.some(
    (fav) => fav.avatar_url === teacher.avatar_url
  );

  const handleFavoriteClick = () => {
    if (isFavorite && isLoggedIn) {
      dispatch(removeFavorite(teacher.avatar_url));
    } else if (isLoggedIn) {
      dispatch(addFavorite(teacher));
    }

    if (!isLoggedIn) {
      toast.error("This functionality is available only to authorised users");
    }
  };

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
        <svg className={css.avatarDot}>
          <use href="/symbol-defs.svg#icon-dot"></use>
        </svg>
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

            {isLoggedIn && isFavorite && (
              <FaHeart
                className={css.pickedHeart}
                onClick={handleFavoriteClick}
              />
            )}

            {(!isLoggedIn || !isFavorite) && (
              <FaRegHeart className={css.heart} onClick={handleFavoriteClick} />
            )}
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
                        src="/user.png"
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

        {!isExpanded && (
          <button
            className={css.loadMoreBtn}
            onClick={handleReadMoreClick}
            type="button"
          >
            Read more
          </button>
        )}

        <div className={css.levelsBlock}>
          {teacher.levels.map((level, index) => (
            <span key={index} className={css.levelTag}>
              #{level}
            </span>
          ))}
        </div>

        {isExpanded && (
          <button
            className={css.bookBtn}
            type="button"
            onClick={() => setModalBookOpen(true)}
          >
            Book trial lesson
          </button>
        )}
      </div>

      <SimpleModal
        isOpen={modalBookIsOpen}
        onClose={() => setModalBookOpen(false)}
      >
        <div className={css.modalCont}>
          <div className={css.textBlock}>
            <h2 className={css.modalTitle}>Book trial lesson</h2>
            <p className={css.modalDesc}>
              Our experienced tutor will assess your current language level,
              discuss your learning goals, and tailor the lesson to your
              specific needs.
            </p>
          </div>

          <div className={css.modalTeacher}>
            <img
              src={teacher.avatar_url}
              alt="teacher avatar"
              className={css.modalAvatar}
            />

            <div className={css.teacherNameBlock}>
              <span className={css.modalNameSpan}>Your teacher</span>
              <p
                className={css.modalName}
              >{`${teacher.name} ${teacher.surname} `}</p>
            </div>
          </div>
          <h3 className={css.reasonHeader}>
            What is your main reason for learning English?
          </h3>
          <BookingForm onClose={() => setModalBookOpen(false)} />
        </div>
      </SimpleModal>
    </li>
  );
};
