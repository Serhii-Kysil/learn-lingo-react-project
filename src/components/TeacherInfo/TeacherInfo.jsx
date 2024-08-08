import css from "./TeacherInfo.module.css";

export const TeacherInfo = ({ name, surname }) => (
  <div className={css.nameBlock}>
    <span className={css.span}>Languages</span>
    <p className={css.name}>{`${name} ${surname} `}</p>
  </div>
);
