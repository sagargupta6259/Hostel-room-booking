import React from "react";

function MyBooking({ rooms, onCancel }) {
  const bookedRoom = rooms.find(
    (room) => room.isBooked
  );

  if (!bookedRoom) {
    return (
      <div className="container">
        <h1>My Booking</h1>
        <h3>You have not booked any room</h3>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>My Booking</h1>

      <div className="room-card">
        <h2>Room {bookedRoom.roomNo}</h2>

        <p>Block: {bookedRoom.block}</p>
        <p>Type: {bookedRoom.type}</p>
        <p>Floor: {bookedRoom.floor}</p>
        <p>Monthly Rent: ₹{bookedRoom.rentPerMonth}</p>

        <button
          className="cancel-btn"
          onClick={() => onCancel(bookedRoom.id)}
        >
          Cancel Booking
        </button>
      </div>
    </div>
  );
}

export default MyBooking;
