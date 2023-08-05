import { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.scss";
import { ReactComponent as Logo } from "../../assets/nutrify.svg";
import { HiMenu } from "react-icons/hi";

export const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    return (
        <div className="navbar">

            <nav className="navbar">
                <div className="container">
                    <div className="navbar_logo">
                        <Logo />
                    </div>
                    <div className="menu_icon" onClick={handleShowNavbar}>
                        <HiMenu />
                    </div>
                    <div className={`navbar_links ${showNavbar && 'active'}`}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/FoodDiary">Food Diary</Link>
                            </li>
                            <li>
                                <Link to="/WorkoutPlanner">Workout Planner</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );

};