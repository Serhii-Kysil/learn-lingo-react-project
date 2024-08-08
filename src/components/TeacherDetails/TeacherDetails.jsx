import css from "./TeacherDetails.module.css";

export const TeacherDetails = ({
  lessonInfo,
  conditions,
  experience,
  languages,
}) => (
  <div className={css.aboutBlock}>
    <p className={css.aboutSpeaks}>
      Speaks:{" "}
      <span className={css.aboutSpeaksSpan}>{languages.join(", ")}</span>
    </p>
    <p className={css.aboutLesson}>
      Lesson Info: <span className={css.aboutSpan}>{lessonInfo}</span>
    </p>
    <p className={css.aboutCond}>
      Conditions: <span className={css.aboutSpan}>{conditions}</span>
    </p>
    <div className={css.expandedBlock}>
      <p className={css.expandedInfo}>{experience}</p>
    </div>
  </div>
);
