import React, { useState } from 'react';
import styles from "./OutpatientTab.module.css";
import MyDropdown from "../../components/UI/Dropdown/MyDropdown"

const OutpatientTab = () => {

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={styles.body}>
      <ul className={styles.outpatientTabs}>
        <li
          className={
            toggleState === 0
              ? `${styles.outpatientTab} ${styles.active}`
              : styles.outpatientTab
          }
          onClick={() => toggleTab(0)}
        >
          Как это работает
        </li>
        <li
          className={
            toggleState === 1
              ? `${styles.outpatientTab} ${styles.active}`
              : styles.outpatientTab
          }
          onClick={() => toggleTab(1)}
        >
          Предоставляемые операции
        </li>
      </ul>
      <MyDropdown items={['Как это работает', 'Предоставляемые операции']} toggleTab={toggleTab} />
      <div
        className={
          toggleState === 0 ? `${styles.tabs} ${styles.active}` : styles.tabs
        }
        onClick={() => toggleTab(0)}
      >
        <ul className={styles.content}>
          <li className={styles.outpatientContent}>
            <p className={styles.title}>Шаг 1. Консультация aaа</p>
            <p className={styles.description}>
              На консультации врач определяет объем операции, вид анестезии,
              определяете удобный для Вас день проведения операции. Расскажет
              Вам о характере предстоящей операции, о подготовке к ней и
              послеоперационном режиме в домашних условиях.
            </p>
          </li>
          <li className={styles.outpatientContent}>
            <p className={styles.title}>Шаг 2. Подготовка к операции</p>
            <p className={styles.description}>
              Перед операцией Вам предстоит сдать определенный перечень анализов
              и пройти ряд исследований. Для удобства все необходимые
              лабораторно-инструментальные исследования и осмотры врачей-специалистов, Вы можете пройти в Alta Medicus Clinic.
            </p>
          </li>
          <li className={styles.outpatientContent}>
            <p className={styles.title}>Шаг 3. Операция.</p>
            <p className={styles.description}>
              Длительность операции зависит от ее объема и сложности . После
              этого Вас переведут в послеоперационную палату, где Вы будете
              находиться под бдительным вниманием медицинского персонала. Через
              несколько часовю Вы отправляетесь домой. Есть определенные
              операции после которых пациент остается под наблюдением на ночь —
              для этого в нашем центре также созданы все условия.
            </p>
          </li>
          <li className={styles.outpatientContent}>
            <p className={styles.title}>Шаг 4. Домашняя реабилитация.</p>
            <p className={styles.description}>
              После операции мы наблюдаем пациентов на протяжении нескольких
              часов. Когда убедились, что общее состояние пришло в норму,
              полностью прошли действия наркоза и состояние операционной зоны
              удовлетворительное, мы выписываем Вас домой. Конечно, после этого
              Вам необходимо приезжать к нам для наблюдения, перевязок,
              коррекции лечения и реабилитации.
            </p>
          </li>
        </ul>
      </div>
      <div
        className={
          toggleState === 1 ? `${styles.tabs} ${styles.active}` : styles.tabs
        }
        onClick={() => toggleTab(1)}
      >
        <ul className={styles.content}>
          <li className={styles.outpatientContent}>
            <p className={styles.title}>Общие операции:</p>
            <p className={styles.description}>
            - Удаление образований кожи (родинки, бородавки, папилломы, кондиломы и др.) <br/>
            - Удаление доброкачественных образований мягких тканей (атеромы, фибромы, липомы и др.)<br/>
            - Оперативное лечение по поводу грыжи брюшной стенки, паховой грыжи, грыжи белой линии живота <br/>
            - Пластика и удаление вросшего ногтя <br/>
            - Врожденные и приобретенные деформации рубцов кожи <br/>
            - Инородные тела кожи и мягких тканей <br/>
            - Операции при варикозной болезни вен нижних конечностей- кростэктомия <br/>
            - Склеротерапия телеангиоэктазий (сосудистых «звездочек»).<br/>
            </p>
          </li>
          <li className={styles.outpatientContent}>
            <p className={styles.title}>Гинекологический профиль ЦАХ:</p>
            <p className={styles.description}>
            - Консультации, диагностика и лечение гинекологической патологии.<br/>
            - Операции на малых и больших половых губах- лабиопластика.<br/>
            - Удаление кондилом, папиллом.<br/>
            - Эхогистеросальпингография.<br/>
            - Диагностическое выскабливание полости матки, полипэктомия.<br/>
            - Подбор метода контрацепции, введение (удаление) ВМС.<br/>
            - Операции на влагалище ( кольпоперинеолеваторопластика, пластика передней стенки влагалища, перинеопластика).<br/> 
            - Восстановление целостности девственной плевы - Гименопластика.<br/>
            - Удаление кисты бартолиновой железы.<br/>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default OutpatientTab;
