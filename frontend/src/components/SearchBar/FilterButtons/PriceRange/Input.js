import { useState, useRef, useEffect } from "react";
import "./Input.scss";

const Input = () => {
  const inputContainerRef = useRef();
  const inputRef = useRef();
  const [focused, setFocused] = useState(false);
  const [isHovered, setIsHovered] = useState({ isHovered: false });
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

  useEffect(() => {
    if (isHovered.isHovered) {
      setClassNames(
        (prev) => prev + `${isHovered.isHovered ? " hovered" : ""}`
      );
    } else {
      let newClassNames = "input-container"

      if (classNames.includes("focused")) {
        newClassNames += "focused"
      } 

      setClassNames(newClassNames)
    }
  }, [isHovered]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (focused && !inputContainerRef.current.containes(e.target)) {
        setFocused(false);
      }
    }

    if (focused) {
      debugger;
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [focused]);

  function handleHover() {
    if (!isHovered.isHovered) {
      setIsHovered({ isHovered: true });
    }
  }

  function handleLeave() {
    if (isHovered.isHovered) {
      setIsHovered({ isHovered: false });
    }
  }

  function handleClick() {
    if (!focused) {
      debugger;
      setFocused(true);
    }

    inputRef.current.focus();
  }

  return (
    <div
      ref={inputContainerRef}
      onClick={handleClick}
      className={classNames}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default Input;
