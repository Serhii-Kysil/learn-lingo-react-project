import css from "./WelcomeImg.module.css";

export const WelcomeImg = () => {
  return (
    <div className={css.imgCont}>
      <img
        className={css.img}
        src="/public/main-img@1x-min.jpg"
        alt="welcome-img"
        srcSet="/public/main-img@2x-min.jpg"
      />
    </div>
  );
};
