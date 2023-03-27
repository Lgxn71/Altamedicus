import React, { useState } from "react";
import styles from "./MyDropdown.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import useClickOutside from "@/hooks/use-click-outside";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(props.items[0]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item, index) => {
    setSelectedItem(item);
    setIsOpen(false);
    props.toggleTab(index); // Call the parent component's function to change the tab
  };

  // calling and custom hook which allows click outside
  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div ref={domNode} className={styles.dropdown}>
      <div className={styles.dropdownButton} onClick={handleToggle}>
        {selectedItem}
        <FontAwesomeIcon
          //   className={open ? `${styles.icon}` : `${styles.iconActive}`}
          icon={faChevronDown}
        />
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {props.items.map((item, index) => (
            <li
              className={styles.dropdownMenuItem}
              key={item}
              onClick={() => handleItemClick(item, index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
