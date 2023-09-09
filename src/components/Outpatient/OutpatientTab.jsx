import { useState } from "react";

import MyDropdown from "../UI/Dropdown/MyDropdown";

import styles from "./OutpatientTab.module.css";

const OutpatientTab = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const howItWorks = howItWorksData.map((content) => (
    <li key={content.id} className={styles.outpatientContent}>
      <p className={styles.title}>{content.title}</p>
      <p className={styles.description}>{content.text}</p>
    </li>
  ));

  const providingOperationsMap = providingOperations.map((item) => (
    <li className={styles.outpatientContent} key={item.title}>
      <p className={styles.title}>{item.title}</p>
      {item.operations.map((operation) => (
        <p key={operation}>{operation}</p>
      ))}
    </li>
  ));

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

      <MyDropdown
        items={["Как это работает", "Предоставляемые операции"]}
        toggleTab={toggleTab}
      />

      <div
        className={
          toggleState === 0 ? `${styles.tabs} ${styles.active}` : styles.tabs
        }
      >
        <ul className={styles.content}>{howItWorks}</ul>
      </div>

      <div
        className={
          toggleState === 1 ? `${styles.tabs} ${styles.active}` : styles.tabs
        }
      >
        <ul className={styles.content}>{providingOperationsMap}</ul>
      </div>
    </div>
  );
};
export default OutpatientTab;

const howItWorksData = [
  {
    id: 1,
    title: "Шаг 1. Консультация",
    text: "На консультации врач определяет объем операции, вид анестезии, определяете удобный для Вас день проведения операции. Расскажет Вам о характере предстоящей операции, о подготовке к ней и послеоперационном режиме в домашних условиях.",
  },
  {
    id: 2,
    title: "Шаг 2. Подготовка к операции",
    text: "Перед операцией Вам предстоит сдать определенный перечень анализов и пройти ряд исследований. Для удобства все необходимые лабораторно-инструментальные исследования и осмотры врачей-специалистов, Вы можете пройти в Arta Medicus Clinic.",
  },
  {
    id: 3,
    title: "Шаг 3. Операция.",
    text: "Длительность операции зависит от ее объема и сложности . После этого Вас переведут в послеоперационную палату, где Вы будете  находиться под бдительным вниманием медицинского персонала. Через несколько часовю Вы отправляетесь домой. Есть определенные  операции после которых пациент остается под наблюдением на ночь —  для этого в нашем центре также созданы все условия.",
  },
  {
    id: 4,
    title: "Шаг 4. Домашняя реабилитация.",
    text: "После операции мы наблюдаем пациентов на протяжении нескольких часов. Когда убедились, что общее состояние пришло в норму, полностью прошли действия наркоза и состояние операционной зоны удовлетворительное, мы выписываем Вас домой. Конечно, после этого Вам необходимо приезжать к нам для наблюдения, перевязок, коррекции лечения и реабилитации.",
  },
];

const providingOperations = [
  {
    title: "Общие операции:",
    operations: [
      "- Удаление образований кожи (родинки, бородавки, папилломы,кондиломы и др.)",
      "- Удаление доброкачественных образований мягких тканей (атеромы, фибромы, липомы и др.)",
      "- Оперативное лечение по поводу грыжи брюшной стенки, паховой грыжи, грыжи белой линии живота",
      "- Пластика и удаление вросшего ногтя",
      "- Врожденные и приобретенные деформации рубцов кожи",
      "- Инородные тела кожи и мягких тканей",
      "- Операции при варикозной болезни вен нижних конечностей-кростэктомия",
      "- Склеротерапия телеангиоэктазий (сосудистых «звездочек»).",
    ],
  },
  {
    title: "Гинекологический профиль ЦАХ:",
    operations: [
      "- Консультации, диагностика и лечение гинекологической патологии.",
      "- Операции на малых и больших половых губах- лабиопластика.",
      "- Удаление кондилом, папиллом.",
      "- Эхогистеросальпингография.",
      "- Диагностическое выскабливание полости матки, полипэктомия.",
      "- Подбор метода контрацепции, введение (удаление) ВМС.",
      "- Операции на влагалище ( кольпоперинеолеваторопластика, пластика передней стенки влагалища, перинеопластика).",
      "- Восстановление целостности девственной плевы - Гименопластика.",
      "- Удаление кисты бартолиновой железы.",
    ],
  },
];
