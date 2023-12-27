import { useRecoilState } from "recoil";
import { popupState } from "@/components/Layout/NavBar/NavigationBar.jsx";

import Image from "next/image";
import ButtonPrimary from "../Buttons/ButtonPrimary.jsx";

import styles from "./Hero.module.css";

const Hero = ({
  isButtonShown,
  highlightedText,
  beforeHighlight,
  afterHighlight,
  paragraphText,
  isImageShown,
  altImage,
  img,
  aboutUsPadding,
}) => {
  const [isPopupShown, setIsPopupShown] = useRecoilState(popupState);

  const openModalHandler = () => {
    setIsPopupShown(true);
  };

  return (
    <section>
      <div
        className={`${styles.heroContainer}
      ${aboutUsPadding && styles.aboutUsPadding}`}
      >
        <div className={styles.title}>
          <h1>
            {beforeHighlight}{" "}
            <span className="highlight">{highlightedText}</span>{" "}
            {afterHighlight}
          </h1>
          <p>{paragraphText}</p>

          {isButtonShown && (
            <ButtonPrimary onClick={openModalHandler}>
              Заказать Звонок
            </ButtonPrimary>
          )}
        </div>
      </div>

      {isImageShown && (
        <Image
          src={img}
          alt={altImage}
          priority
          className={styles.heroImage}
          quality={85}
        />
      )}
    </section>
  );
};

export default Hero;
