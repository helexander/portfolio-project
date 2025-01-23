// File: src/components/Header.js
import React from "react";
import HeaderCard from "./HeaderCard";
import "../styles/Header.scss";

const Header = () => {
    return (
        <header id="home">
            <div className="header-content">
                <HeaderCard />
            </div>
        </header>
    );
};

export default Header;
