import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const MegaDropdown = ({ title, leftItems, rightItems }) => {
    return (
        <div className="nav-item mega-dropdown dropdown-open">
            <span className="dropdown-title">
                {title}

            </span>

            <div className="mega-menu dropdown-animate">
                {/* Left Column */}
                <div className="mega-left">
                    {leftItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.to}
                            className="d-block text-decoration-none"
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Right Column */}
                <div className="mega-right">
                    {rightItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.to}
                            className="d-block text-decoration-none"
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MegaDropdown;
