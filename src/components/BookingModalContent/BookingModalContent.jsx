import css from "./BookingModalContent.module.css";

export const BookingModalContent = ({ avatar_url, name, surname }) => {
  return (
    <>
      <div className={css.textBlock}>
        <h2 className={css.modalTitle}>Book trial lesson</h2>
        <p className={css.modalDesc}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
      </div>
      <div className={css.modalTeacher}>
        <img
          src={avatar_url}
          alt="teacher avatar"
          className={css.modalAvatar}
        />
        <div className={css.teacherNameBlock}>
          <span className={css.modalNameSpan}>Your teacher</span>
          <p className={css.modalName}>{`${name} ${surname} `}</p>
        </div>
      </div>
      <h3 className={css.reasonHeader}>
        What is your main reason for learning English?
      </h3>
    </>
  );
};
