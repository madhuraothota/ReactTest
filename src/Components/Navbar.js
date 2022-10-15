import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="nav-wrapper blue darken-4">
                <div className="container">
                    <ul className="right">
                        <li><Link to="/TopStories">TopStories</Link></li>
                        <li><Link to="/LatestStories">LatestStories</Link></li>
                        <li><Link to="/BestStories">BestStories</Link></li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;