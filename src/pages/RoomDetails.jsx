import React from "react";
import { useParams } from "react-router";
import { useState } from "react";

function RoomDetails({ rooms, onBook, onCancel }) {
  const { id } = useParams();

  const room = rooms.find(
    (item) => item.id === Number(id)
  );

  if (!room) {
    return <h2 className="container">Room Not Found</h2>;
  }

  const bedsLeft = room.capacity - room.occupied;

  const hasBooking = rooms.some(
    (item) => item.isBooked
  );

  return (
    <div className="container">
      <h1>Room Details</h1>

      <div className="room-card">
        <h2>{room.roomNo}</h2>

        <p>Block: {room.block}</p>
        <p>Floor: {room.floor}</p>
        <p>Type: {room.type}</p>
        <p>Monthly Rent: ₹{room.rentPerMonth}</p>
        <p>Capacity: {room.capacity}</p>
        <p>Occupied: {room.occupied}</p>
        <p>Beds Left: {bedsLeft}</p>

        <h3>Facilities</h3>

        <ul>
          {room.facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>

        {room.isBooked ? (
          <button className="cancel-btn" onClick={() => onCancel(room.id)}>Cancel Booking
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

export default RoomDetails;
