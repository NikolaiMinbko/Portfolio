import React, { useState, useRef } from "react";
import OpenMenu from "./OpenMenu";
import Navigation from "./Navigation";

const Header = () => {
  const [state, setState] = useState(false);
  const open = () => setState(true);
  const close = () => setState(false);

  const menuRef = useRef();
  const linkRef = useRef();

  const handleOutsideClick = (e) => {
    if (!e.path.includes(menuRef.current)) {
      return setState(false);
    }
  };

  return !state ? (
    <Navigation open={open} />
  ) : (
    <OpenMenu
      close={close}
      menuRef={menuRef}
      linkRef={linkRef}
      handleOutsideClick={handleOutsideClick}
    />
  );
};

export default Header;
