import { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Profile"
      />
      <img className='nav__downArrow' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilGLYabeUrTpjzQC8eqxG_Y9UEPsbrcfzwwaCyOE35t3Ns5yRQMrqeQ1hNEER0DncE80jGyv02tt1t9YirGWEqGc0lF3CTHB_Rrw_NdoJOkP5Ql7F6Jo7FhkfB7at6yFIvBR38YkycJme5arWUQ36JzjdFKZ3wPtaRPSuq0kWmgG4L0LAcBhzJcQLtQg/s320/caret-down-solid.png" alt=""  />
    </div>
  );
}

export default Nav;
