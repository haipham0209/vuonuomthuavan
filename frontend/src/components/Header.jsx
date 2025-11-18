import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header
            style={{
                width: "100%",
                background: "#2e7d32", // xanh lá đậm
                padding: "14px 0",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                position: "sticky",
                top: 0,
                zIndex: 999,
            }}
        >
            <div
                style={{
                    width: "90%",
                    maxWidth: "1200px",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* LOGO */}
                <div style={{ color: "white", fontWeight: "bold", fontSize: "22px" }}>
                    Vườn Ươm Thừa Vân
                </div>

                {/* NAVIGATION */}
                <nav>
                    <ul
                        style={{
                            display: "flex",
                            listStyle: "none",
                            gap: "24px",
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <li>
                            <Link style={linkStyle} to="/">Home</Link>
                        </li>
                        <li>
                            <Link style={linkStyle} to="/products">Sản phẩm</Link>
                        </li>
                        <li>
                            <Link style={linkStyle} to="/about">Về chúng tôi</Link>
                        </li>

                        <li>
                            <Link style={linkStyle} to="/news">Tin tức</Link>
                        </li>
                        <li>
                            <Link style={linkStyle} to="/contact">Liên hệ</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 500,
    transition: "0.25s",
};

export default Header;
