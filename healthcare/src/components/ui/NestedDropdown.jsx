import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NestedDropdown = ({ title, items }) => {
    const [open, setOpen] = useState(false);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

    const toggleSubMenu = (index) => {
        setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
    };

    return (
        <div className="nav-item">
            <span
                className="dropdown-title d-flex align-items-center gap-2"
                onClick={() => setOpen(!open)}
                style={{ cursor: "pointer" }}
            >
                {title}
            </span>

            <div
                className={`dropdown-menu dropdown-animate ${open ? "show" : ""}`}
            >
                {items.map((item, index) => (
                    <div key={index} className="nested-item">
                        {item.children ? (
                            <>
                                <span
                                    className="nested-title d-flex justify-content-between align-items-center"
                                    onClick={() => toggleSubMenu(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {item.label}
                                    {/* Optional arrow icon */}
                                </span>
                                <div
                                    className={`sub-menu dropdown-animate ${openSubMenuIndex === index ? "show" : ""}`}
                                >
                                    {item.children.map((sub, i) => (
                                        <NavLink
                                            key={i}
                                            to={sub.to}
                                            className="d-block text-decoration-none"
                                        >
                                            {sub.label}
                                        </NavLink>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <NavLink
                                to={item.to}
                                className="d-block text-decoration-none"
                            >
                                {item.label}
                            </NavLink>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NestedDropdown;
