import css from "./WelcomeImg.module.css";

export const WelcomeImg = () => {
  return (
    <div className={css.imgCont}>
      <img
        className={css.img}
        src="/main-img@1x.jpg"
        alt="welcome-img"
        srcSet="/main-img@2x.jpg"
      />
    </div>
  );
};
