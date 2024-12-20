import { Link } from "react-router-dom";
import style from "./styles.module.css";

export const DesktopMenu = () => {
  return (
    <nav className={style.container}>
      <Link className={style.link} to="/Beans/beans">Beans</Link>
      <Link className={style.link} to="/Beans/facts">Facts</Link>
      <Link className={style.link} to="/Beans/recipes">Recipes</Link>
      <Link className={style.link} to="/Beans/combinations">Combinations</Link>
      <Link className={style.link} to="/Beans/history">History</Link>
      <Link className={style.link} to="/Beans/Review">Review</Link>
      <Link className={style.link} to="/Beans/About">About</Link>
    </nav>
  );
};
