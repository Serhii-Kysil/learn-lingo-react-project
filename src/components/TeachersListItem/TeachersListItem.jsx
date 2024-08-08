/* eslint-disable react/prop-types */
import css from "./TeachersListItem.module.css";

import { addFavorite, removeFavorite } from "../../redux/Teachers/TeacherSlice";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimpleModal } from "../SimpleModal/SimpleModal";
import { BookingForm } from "../BookingForm/BookingForm";
import { selectIsLoggedIn } from "../../redux/Auth/selector";
import toast from "react-hot-toast";

import { TeacherImage } from "../TeacherImage/TeacherImage";
import { TeacherInfo } from "../TeacherInfo/TeacherInfo";
import { TeacherStats } from "../TeacherStats/TeacherStats";
import { TeacherDetails } from "../TeacherDetails/TeacherDetails";
import { TeacherReviews } from "../TeacherReviews/TeacherReviews";
import { TeacherLevels } from "../TeacherLevels/TeacherLevels";
import { BookingButton } from "../BookingButton/BookingButton";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { BookingModalContent } from "../BookingModalContent/BookingModalContent";

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
      <TeacherImage avatarUrl={teacher.avatar_url} />

      <div className={css.infoBlock}>
        <div className={css.topBlock}>
          <TeacherInfo name={teacher.name} surname={teacher.surname} />
          <div className={css.topBar}>
            <TeacherStats
              lessonsDone={teacher.lessons_done}
              rating={teacher.rating}
              pricePerHour={teacher.price_per_hour}
            />
            <FavoriteButton
              isLoggedIn={isLoggedIn}
              isFavorite={isFavorite}
              onClick={handleFavoriteClick}
            />
          </div>
        </div>
        <TeacherDetails
          lessonInfo={teacher.lesson_info}
          conditions={teacher.conditions}
          experience={teacher.experience}
          languages={teacher.languages}
        />
        {isExpanded && <TeacherReviews reviews={teacher.reviews} />}
        {!isExpanded && (
          <button
            className={css.loadMoreBtn}
            onClick={handleReadMoreClick}
            type="button"
          >
            Read more
          </button>
        )}
        <TeacherLevels levels={teacher.levels} />
        {isExpanded && <BookingButton onClick={() => setModalBookOpen(true)} />}
      </div>
      <SimpleModal
        isOpen={modalBookIsOpen}
        onClose={() => setModalBookOpen(false)}
      >
        <div className={css.modalCont}>
          <BookingModalContent
            avatar_url={teacher.avatar_url}
            name={teacher.name}
            surname={teacher.surname}
          />
          <BookingForm onClose={() => setModalBookOpen(false)} />
        </div>
      </SimpleModal>
    </li>
  );
};
