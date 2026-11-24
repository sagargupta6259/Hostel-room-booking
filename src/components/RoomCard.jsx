
import React from "react";
import { Link } from "react-router";

function RoomCard({ room, onBook, onCancel, hasBooking }) {
  const bedsLeft = room.capacity - room.occupied;

  return (
    <div className="room-card">
      <h3>Room {room.roomNo}</h3>

      <p>Block: {room.block}</p>
      <p>Type: {room.type}</p>
      <p>Rent: ₹{room.rentPerMonth}/month</p>
      <p>Beds Left: {bedsLeft}</p>

      <p className={bedsLeft > 0 ? "available" : "full"}>
        {bedsLeft > 0 ? `${bedsLeft} Beds Left` : "Full"}
      </p>

      <Link to={`/rooms/${room.id}`}>
        View Details
      </Link>

      <div className="card-actions">
        {room.isBooked ? (
          <button className="cancel-btn" onClick={() => onCancel(room.id)}>
            Cancel Booking
          </button>
        ) : bedsLeft === 0 ? (
          <button disabled>Room Full</button>
        ) : hasBooking ? (
          <p>Already booked another room</p>
        ) : (
          <button onClick={() => onBook(room.id)}>
            Book Room
          </button>
        )}
      </div>
    </div>
  );
}

export default RoomCard;
