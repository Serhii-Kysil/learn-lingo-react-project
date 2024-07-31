import css from "./WelcomeInfo.module.css";

export const WelcomeInfo = () => {
  return (
    <div className={css.welcomeInfo}>
      <h1 className={css.title}>
        Unlock your potential with the best{" "}
        <span className={css.highlight}>language</span> tutors
      </h1>
      <p className={css.desc}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <button className={css.btn}>Get started</button>
    </div>
  );
};
