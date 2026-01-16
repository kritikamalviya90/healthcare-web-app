import React from "react";
import homepage1 from "../../assets/home/homepage1.jpg";
import homepage2 from "../../assets/home/homepage2.jpg";
import homepage3 from "../../assets/home/homepage3.jpg";
import homepage4 from "../../assets/home/homepage4.jpg";

const HomeDropdown = () => {
    const items = [
        { img: homepage1, label: "Home Page 01", link: "/home01" },
        { img: homepage2, label: "Home Page 02", link: "/home02" },
        { img: homepage3, label: "Home Page 03", link: "/home03" },
        { img: homepage4, label: "Home Dark", link: "/home-dark" },
    ];

    return (
        <div className="nav-item dropdown-home">
            <span className="dropdown-title">Home</span>

            <div className="home-dropdown-menu dropdown-animate d-flex justify-content-center">
                <div className="container  ">
                    <div className="row g-2 justify-content-center">
                        {items.map((item, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-3 py-4 px-4 ">
                                <div className="home-item position-relative ">
                                    <img
                                        src={item.img}
                                        alt={item.label}
                                        className="img-fluid rounded"
                                    />

                                    {/* Overlay with buttons */}
                                    <div className="overlay d-flex flex-column justify-content-center align-items-center">
                                        <a href={item.link} className="btn btn-primary btn-sm m-1">
                                            View
                                        </a>
                                        <a href="#" className="btn btn-secondary btn-sm m-1">
                                            Info
                                        </a>
                                    </div>

                                    <div className="text-center mt-2">{item.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDropdown;
