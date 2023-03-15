import React, { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Layout from "./layout/Layout";
import Profile from "./Profile";
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";



const Filter = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [

        {
            path: "/home",
            name: "Home",
            component: <Home />

        },
        {
            path: "/about",
            name: "About",
            component: <About />
        },
        {
            path: "/profile",
            name: "Profile",
            component: <Profile />
        }

    ]

    return (
        <Layout>
            <>
                <div className="container">
                    <div style={{ height: "600px", marginLeft: "-289px", width: isOpen ? "200px" : "50px" }} className="sidebar">
                        <div className="top_section">
                            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdD2Boi3jt_XLBGesRN0inV-tOVDhy9N1OPJL_DK-lF_Q81-nEk1-FDrZR6bBcapsoI0&usqp=CAU"
                                    alt="Bootstrap"
                                    style={{ height: "31px", width: "44px", borderRadius: "50%" }} />
                            </h1>
                            <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                                <FaBars onClick={toggle} />
                            </div>
                        </div>
                        {
                            menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                    <div className="icon">{item.icon}</div>
                                    <div style={{ color:"black",display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                                </NavLink>
                            ))
                        }
                    </div>
                    <main>{children}</main>
                </div>
            </>
        </Layout>



    )
}
export default Filter;
