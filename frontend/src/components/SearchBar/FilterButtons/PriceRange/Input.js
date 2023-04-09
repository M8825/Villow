import { useState, useRef, useEffect } from "react";
import "./Input.scss";

const Input = () => {
  const inputContainerRef = useRef();
  const inputRef = useRef();
  const [focused, setFocused] = useState(false);
  const [isHovered, setIsHovered] = useState({ isHovered: true });
  const [classNames, setClassNames] = useState("input-container");

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        focused &&
        inputContainerRef.current &&
        !inputContainerRef.current.contains(e.target)
      ) {
        setFocused(false);
      }
    }

    if (focused) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [focused]);

  function handleClick() {
    if (!focused) {
      setFocused(true);
    }
    inputRef.current.focus();
  }

  useEffect(() => {
    debugger
    if (classNames !== "input-container") {
      setClassNames("input-container");
    } else {
      setClassNames(
        `input-container ${focused ? "focused" : ""} ${
          isHovered ? "hovered" : ""
        }`
      );
    }
  }, [isHovered]);

  function handleHover() {
    if (!isHovered.isHovered){
      setIsHovered({ isHovered: true });
    } else {
      setIsHovered({ isHovered: false });
    }
  }
  return (
    <div
      onClick={handleClick}
      ref={inputContainerRef}
      className={classNames}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default Input;
