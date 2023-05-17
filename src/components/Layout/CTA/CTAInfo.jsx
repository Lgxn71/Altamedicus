import styles from "./CTAInfo.module.css";
const CTAInfo = (props) => {
  return (
    <ul>
      {props.data.map((contact) => (
        <li className={styles.detailInfo} key={contact.detail}>
          <h5>{contact.detail}</h5>
          <p>{contact.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default CTAInfo;
