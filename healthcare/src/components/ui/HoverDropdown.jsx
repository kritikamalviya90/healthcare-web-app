import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const HoverDropdown = ({ title, items }) => {
    const [show, setShow] = useState(false);

    return (
        <Dropdown
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            show={show}
        >
            <Dropdown.Toggle as="span" className="dropdown-title">
                {title}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ marginTop: "30px" }}>
                {items.map((item, idx) => (
                    <Dropdown.Item key={idx} as={NavLink} to={item.to}>
                        {item.label}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default HoverDropdown;
