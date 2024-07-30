import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={css.logoCont}>
        <svg className={css.svg}>
          <use href="/public/symbol-defs.svg#icon-ukraine"></use>
        </svg>
        <span className={css.logoText}>LearnLingo</span>
      </div>
      {/* <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
