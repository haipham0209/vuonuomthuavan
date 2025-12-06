import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const menuItems = [
    { title: "Trang chủ", to: "/trang-chu" },
    { title: "Cây giống", to: "/cay-giong" },
    { title: "Về chúng tôi", to: "/ve-chung-toi" },
    { title: "Tin tức", to: "/tin-tuc" },
    { title: "Liên hệ", to: "/lien-he" },
];

const Header = () => {
    const { pathname } = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    // Hàm kiểm tra active được cập nhật
    const isActive = (path) => {
        // Xử lý đặc biệt cho Trang chủ: active nếu path trùng HOẶC path đang ở gốc '/'
        if (path === "/trang-chu") {
            return pathname === path || pathname === "/";
        }
        return pathname.startsWith(path); // Dùng startsWith để xử lý các đường dẫn con (ví dụ: /cay-giong/1)
    };

    const closeMobileMenu = () => {
        setMobileOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileOpen((prev) => !prev);
    };

    return (
        <>
            <header className="header">
                {/* Đã sửa lỗi chính tả header‐inner -> header-inner */}
                <div className="header-inner"> 
                    <Link to="/trang-chu" className="header-logo">
                        <img src="/logo.png" alt="Vườn Ươm Thừa Vân" style={{ height: "50px" }} />
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

                    {/* Có thể thay thế ☰ bằng icon X khi mở menu */}
                    <button 
                        className="hamburger-btn" 
                        onClick={toggleMobileMenu}
                    >
                         {mobileOpen ? '✕' : '☰'} 
                    </button>
                </div>
            </header>

            {/* 1. Backdrop (Vùng phủ) - Chỉ hiện khi menu mở */}
            {mobileOpen && (
                <div 
                    className="mobile-menu-backdrop" 
                    onClick={closeMobileMenu} 
                />
            )}

            {/* 2. Mobile menu slide */}
            <nav className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                // Sử dụng class active đã được style trong CSS
                                className={`mobile-nav-link ${isActive(item.to) ? "active" : ""}`}
                                onClick={closeMobileMenu} // Đóng menu khi click vào link
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Header;