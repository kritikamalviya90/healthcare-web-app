import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ title, to, items }) => {
    return (
        <div className="nav-item dropdown-open">
            <NavLink to={to} className="dropdown-title">
                {title}
            </NavLink>

            <div className="dropdown-menu dropdown-animate">
                {items.map((item, index) => (
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
    );
};

export default Dropdown;
