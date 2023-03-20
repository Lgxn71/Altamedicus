import React, { useState, useRef } from "react";
import styles from "./Dropdown.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import useClickOutside from "@/hooks/use-click-outside";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  function handleItemClick(event) {
    dropdownRef.current.textContent = event.target.textContent;
  }

  //   const [selectedOption, setSelectedOption] = useState("");

  //   const toggleDropdown = () => {
  //     setIsOpen(!isOpen);
  //   };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  //   const handleSelect = (event) => {
  //     setSelectedOption(event.target.value);
  //     setIsOpen(false);
  //   };

  // calling and custom hook which allows click outside
  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div ref={domNode} tabIndex="0" className={styles.dropdown}>
      <div
        ref={dropdownRef}
        className={styles.dropdownButton}
        onClick={handleToggle}
      >
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
            onChange={handleItemClick}
            value="Option 1"
          >
            Option 1
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
