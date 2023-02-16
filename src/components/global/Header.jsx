import React from "react";
import Nav from "./Nav";
import "../../App.css";
import { useWidth } from "../../Width";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({ toggleDrawer }) {
  const [hideNav] = useWidth();

  return (
    <header>
      <div className="header-logo-section">
        {!hideNav && (
          <div>
            <button onClick={toggleDrawer(true)}>
              <MenuIcon />
            </button>
          </div>
        )}
        <div>
          <img
            src="/assets/Logo.png"
            width=""
            height=""
            alt="littel lemon logo"
          />
        </div>
      </div>

      {hideNav && <Nav />}
    </header>
  );
}
