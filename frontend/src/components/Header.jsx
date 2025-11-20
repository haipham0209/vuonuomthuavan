import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const menuItems = [
  { title: "Trang chủ", to: "/trang-chu" },
  { title: "Sản phẩm", to: "/cay-giong" },
  { title: "Về chúng tôi", to: "/ve-chung-toi" },
  { title: "Tin tức", to: "/tin-tuc" },
  { title: "Liên hệ", to: "/lien-he" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => {
    return pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <div className="header‐inner">
          <Link to="/trang-chu" className="header-logo">
            Vườn Ươm Thừa Vân
          </Link>

          <nav className="nav-links">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link ${isActive(item.to) ? "active" : ""}`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <button className="hamburger-btn" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </header>

      {/* Mobile menu slide */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`nav-link ${isActive(item.to) ? "active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
