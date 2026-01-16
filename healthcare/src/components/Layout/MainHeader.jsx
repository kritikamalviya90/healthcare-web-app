import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import Button from "../ui/Button";
import "../../index.css";
import MedioxIcon from "../../assets/MedioxIcon.png";
import Dropdown from "../ui/Dropdown";
import MegaDropdown from "../ui/MegaDropdown";
import NestedDropdown from "../ui/NestedDropdown";
import HomeDropdown from "../ui/HomeDropdown";

const MainHeader = () => {
    return (
        <header className="main-header">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between">

                    {/* Logo */}
                    <div className="logo d-flex align-items-center gap-2">
                        <img src={MedioxIcon} alt="MediocIcon" className="logo-icon" />
                    </div>

                    {/* Navigation */}
                    <nav className="nav-links d-none d-lg-flex gap-4">

                        <HomeDropdown
                            title="Home"
                            to="/"

                            items={[
                                { label: "Home 1", to: "/home-1" },
                                { label: "Home 2", to: "/home-2" },
                            ]}
                        />

                        <NavLink to="/about">About</NavLink>

                        <Dropdown
                            title="Services"
                            to="/services"
                            items={[
                                { label: "Doctors", to: "/services/doctors" },
                                { label: "Appointment", to: "/services/appointment" },
                                { label: "Emergency", to: "/services/emergency" },
                            ]}
                        />


                        <NestedDropdown
                            title="Pages"
                            items={[
                                {
                                    label: "Our Team",
                                    children: [
                                        { label: "Our Team 01", to: "/team-01" },
                                        { label: "Our Team 02", to: "/team-02" },
                                        { label: "Our Team 03", to: "/team-03" },
                                    ],
                                },
                                { label: "Team Details", to: "/team-details" },
                                { label: "Our History", to: "/history" },
                                { label: "Testimonials", to: "/testimonials" },
                                { label: "Pricing Plan", to: "/pricing" },
                                { label: "FAQ", to: "/faq" },
                            ]}
                        />
                        <Dropdown
                            title="Shop"
                            to="/shop"
                            items={[
                                { label: "Products", to: "/shop/products" },
                                { label: "Cart", to: "/shop/cart" },
                                { label: "Checkout", to: "/shop/checkout" },
                            ]}
                        />

                        <Dropdown
                            title="Blog"
                            to="/blog"
                            items={[
                                { label: "Blog Grid", to: "/blog/grid" },
                                { label: "Blog Details", to: "/blog/details" },
                            ]}
                        />

                        <NavLink to="/contact">Contact</NavLink>
                    </nav>

                    {/* Right Actions */}
                    <div className="header-actions d-flex align-items-center gap-3">
                        <FaSearch className="icon" />
                        <FaShoppingCart className="icon" />

                        < Button to="/appointment">
                            Make An Appointment →
                        </ Button>

                        {/* Mobile Menu */}
                        <FaBars className="icon d-lg-none" />
                    </div>
                </div>
            </div>

        </header>
    );
};

export default MainHeader;
