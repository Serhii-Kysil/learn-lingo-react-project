import css from "./TeacherLevels.module.css";

export const TeacherLevels = ({ levels }) => (
  <div className={css.levelsBlock}>
    {levels.map((level, index) => (
      <span key={index} className={css.levelTag}>
        #{level}
      </span>
    ))}
  </div>
);
