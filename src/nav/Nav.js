import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/nav.css";
import logoIcon from "../assets/logo.png"; // Import your logo image

export default function Nav() {
    const location = useLocation();

    const getNavPositionClass = () => {
        switch (location.pathname) {
            case "/":
            case "/logo":
                return "nav-info";
            case "/about":
                return "nav-about";
            case "/works":
                return "nav-works";
            case "/frames":
                return "nav-frames";
            case "/contact":
                return "nav-contact";
            default:
                return "";
        }
    };

    const navPositionClass = getNavPositionClass();

    const isCurrentPage = (navClass) => {
        return navClass === navPositionClass;
    };

    const renderNavLink = (to, navClass, title) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link";

        return (
            <Link to={to} className={linkClass}>
                <span className="page-title">{title}</span>
            </Link>
        );
    };

    return (
        <header>
            <div className="logo-container">
                <Link to="/logo">
                    <img src={logoIcon} alt="Logo" className="logo-icon" />
                </Link>
            </div>
            <nav className={`nav ${navPositionClass}`}>
                {renderNavLink("/about", "nav-about", "About")} 
                {renderNavLink("/works", "nav-works", "Works")}
                {renderNavLink("/frames", "nav-frames", "Frames")}
                {renderNavLink("/contact", "nav-contact", "Contact")}
            </nav>
        </header>
    );
}