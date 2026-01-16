import React from "react";
import { Button as BsButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../index.css";

const Button = ({
    children,
    to,
    onClick,
    type = "button",
    className = "",
    disabled = false,
}) => {
    // If route is provided → use React Router
    if (to) {
        return (
            <Link to={to} className={`appointment-btn text-decoration-none ${className}`}>
                {children}
            </Link>
        );
    }

    // Normal button (React Bootstrap wrapper)
    return (
        <BsButton
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`appointment-btn ${className}`}
        >
            {children}
        </BsButton>
    );
};

export default Button;
