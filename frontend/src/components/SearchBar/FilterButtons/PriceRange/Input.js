import { useState, useRef, useEffect } from "react";
import "./Input.scss";

const Input = () => {
  const inputContainerRef = useRef();
  const inputRef = useRef();

  const [focused, setFocused] = useState({ isFocused: false });
  const [classNames, setClassNames] = useState("input-container");

  useEffect(() => {
    function handleOutside(e) {
      if (inputContainerRef.current !== e.target) {
        const inputWrapper = document.getElementsByClassName("focused")[0];
        inputWrapper.classList.remove("focused");
        setFocused({ isFocused: false });
      }
    }

    const dropDownElement = document.getElementById("drpdwn");
    dropDownElement.addEventListener("click", handleOutside);
  }, [focused]);

  function handleHover() {
    inputContainerRef.current.classList.add("hovered");
  }

  function handleLeave() {
    inputContainerRef.current.classList.remove("hovered");
  }

  function handleClick(e) {
    e.preventDefault();

    inputRef.current.focus();
    setFocused({ isFocused: true });

    inputContainerRef.current.classList.add("focused");
  }

  return (
    <div
      ref={inputContainerRef}
      onClick={handleClick}
      className={classNames}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <input ref={inputRef} type="text" id="input" />
    </div>
  );
};

export default Input;
