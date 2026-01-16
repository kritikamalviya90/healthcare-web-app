import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

import "../../index.css";

const Header = () => {
    return (
        <div className="header text-white py-2 align-items-center">
            <div className="container-fluid px-2 d-flex justify-content-between align-items-center">

                {/* Left side: Location, Email, Phone */}
                <div className="d-flex align-items-center flex-nowrap gap-3">
                    <div className="d-flex align-items-center gap-1 fs-6">
                        <MdLocationOn style={{ color: "#4bc0c9ff", fontSize: "1.2rem" }} />
                        <span>4648 Rocky Road Philadelphia PA, 1920</span>
                    </div>

                    <div className="d-flex align-items-center gap-1 fs-6">
                        <MdEmail style={{ color: "#4bc0c9ff", fontSize: "1.2rem" }} />
                        <span>needhelp@company.com</span>
                    </div>

                    <div className="d-flex align-items-center gap-1 fs-6">
                        <MdPhone style={{ color: "#4bc0c9ff", fontSize: "1.2rem" }} />
                        <span>+91 56980036420</span>
                    </div>
                </div>

                {/* Right side: Social Icons */}
                <div className="d-flex align-items-center gap-2 flex-nowrap">
                    <FaFacebookF className="social-icon" />
                    <FaTwitter className="social-icon" />
                    <FaInstagram className="social-icon" />
                    <FaYoutube className="social-icon" />
                </div>

            </div>
        </div>
    );
};

export default Header;
