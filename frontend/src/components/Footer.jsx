import React from "react";

const Footer = () => {
  return (
    <footer style={{
      background: "#333",
      color: "white",
      padding: "10px",
      textAlign: "center",
      marginTop: "20px"
    }}>
      © {new Date().getFullYear()} Tạp Hoá Thuận An. All rights reserved.
    </footer>
  );
};

export default Footer;
