import { useRecoilState } from "recoil";

import CTATitle from "./CTATitle.jsx";
import CTAInfo from "./CTAInfo.jsx";

import { CONTACT_DATA_1, CONTACT_DATA_2 } from "@/data/ContactData/contact";

import Container from "../../UI/Container/Container.jsx";
import ButtonPrimary from "../../UI/Buttons/ButtonPrimary.jsx";

import styles from "./CTA.module.css";

import { popupState } from "../NavBar/NavigationBar.jsx";
const CTA = () => {
  const [isPopupShown, setIsPopupShown] = useRecoilState(popupState);

  const openModalHandler = () => {
    setIsPopupShown(true);
  };

  return (
    <section className={styles.callToAction}>
      <Container>
        <div className={styles.row}>
          <div className={`${styles.column} ${styles.firstColumn}`}>
            <CTATitle
              title="Остались вопросы? Закажите Звонок!"
              paragraph="Перезвоним, проконсультируем, и запишем Вас на прием!"
            />

            <ButtonPrimary onClick={openModalHandler}>
              Заказать звонок
            </ButtonPrimary>
          </div>

          <div className={styles.column}>
            <CTATitle
              title="Свяжитесь с нами"
              paragraph="Наша клиника работает с 09:00 до 19:00 Без выходных."
            />

            <div className={styles.columnInfo}>
              <CTAInfo data={CONTACT_DATA_1} />
              <CTAInfo data={CONTACT_DATA_2} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
