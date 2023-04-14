import React, { ChangeEvent } from "react";
import "./hamburger.sass";

interface HamBurgerProps {
  onOpen?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClose?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const HamBurger = ({ onOpen, onClose }: HamBurgerProps) => {
  const clickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (onOpen) onOpen(e);
    } else if (onClose) onClose(e);
  };
  return (
    <div className="hd-ui-hamurger hamburger-container">
      <input
        type="checkbox"
        id="ham-menu1"
        hidden
        onChange={clickHandler}
        title="HamBurger"
      />
      <label className="container__inner" htmlFor="ham-menu1">
        <div className="stroke1 stroke"></div>
        <div className="stroke2 stroke"></div>
        <div className="stroke3 stroke"></div>
      </label>
    </div>
  );
};

export default HamBurger;
