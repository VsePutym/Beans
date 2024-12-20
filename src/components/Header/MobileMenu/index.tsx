import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className={styles.wrapper}>
          <nav>
            <Link to="/Beans/beans" onClick={handleLinkClick}>
              Beans
            </Link>
            <Link to="/Beans/facts" onClick={handleLinkClick}>
              Facts
            </Link>
            <Link to="/Beans/recipes" onClick={handleLinkClick}>
              Recipes
            </Link>
            <Link to="/Beans/combinations" onClick={handleLinkClick}>
              Combinations
            </Link>
            <Link to="/Beans/history" onClick={handleLinkClick}>
              History
            </Link>
            <Link to="/Beans/Review" onClick={handleLinkClick}>
              Review
            </Link>
            <Link to="/Beans/About" onClick={handleLinkClick}>
              About
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
