
import React from "react";
import { Link } from "react-router";

function Navbar({ bookedCount }) {
  return (
    <nav className="navbar">
      <h2>Hostel Booking</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/my-booking">
          My Booking ({bookedCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
