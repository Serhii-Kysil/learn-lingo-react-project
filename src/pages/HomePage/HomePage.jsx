import { WelcomeImg } from "../../components/WelcomeImg/WelcomeImg";
import { WelcomeInfo } from "../../components/WelcomeInfo/WelcomeInfo";

import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.home}>
      <div className={css.welcomeSection}>
        <WelcomeInfo />
        <WelcomeImg />
      </div>
    </div>
  );
}
