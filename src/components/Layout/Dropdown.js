import React, { useState } from "react";
import styles from "./Dropdown.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import useClickOutside from "@/hooks/use-click-outside";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // calling and custom hook which allows click outside
  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div ref={domNode} tabIndex="0" className={styles.dropdown}>
      <div className={styles.dropdownButton} onClick={handleToggle}>
        Select an item...
        <FontAwesomeIcon
          //   className={open ? `${styles.icon}` : `${styles.iconActive}`}
          icon={faChevronDown}
        />
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu} onClick={handleToggle}>
          <li
            className={
              props.toggleState === 1
                ? `${styles.dropdownMenuItem}`
                : styles.dropdownMenuItem
            }
            onClick={() => props.toggleTab(1)}
          >
            DD
          </li>
          <li
            className={
              props.toggleState === 2
                ? `${styles.dropdownMenuItem}`
                : styles.dropdownMenuItem
            }
            onClick={() => props.toggleTab(2)}
          >
            Option 2
          </li>
          <li
            className={
              props.toggleState === 3
                ? `${styles.dropdownMenuItem}`
                : styles.dropdownMenuItem
            }
            onClick={() => props.toggleTab(3)}
          >
            Option 3
          </li>
          <li
            className={
              props.toggleState === 4
                ? `${styles.dropdownMenuItem}`
                : styles.dropdownMenuItem
            }
            onClick={() => props.toggleTab(4)}
          >
            Option 4
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
