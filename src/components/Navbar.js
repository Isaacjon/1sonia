import React, { useState } from "react";
import "../assets/styles/layout/navbar.scss";
import logo from "../assets/images/sonia-logo.svg";
import uzb from "../assets/images/flag-uzb.svg";
import burgerMenu from "../assets/images/burgerMenu.svg";

const data = [
  { id: 1, title: "Asosiy", link: "asosiy" },
  { id: 2, title: "Bo’limlar", link: "bolimlar" },
  { id: 3, title: "Biz haqimizda", link: "bizHaqimizda" },
  { id: 4, title: "Aloqa", link: "aloqa" },
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo-sonia" />
            </a>
          </div>
          <ul
            className="nav-menu"
            style={{ transform: openNav && "translateX(0%)" }}
          >
            {data.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="lang">
            <div>
              <img src={uzb} alt="uzb" />
              <span>uz</span>
            </div>
            <div className="btnDiv">
              <button>Bo’sh ish o’rinlari</button>
            </div>
            <div className="closeBtn" onClick={() => setOpenNav(!openNav)}>
              <button className="">
                <img src={burgerMenu} alt="burgerMenu" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
