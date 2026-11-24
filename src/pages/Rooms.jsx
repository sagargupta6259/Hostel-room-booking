import React from "react";
import { useState } from "react";
import RoomCard from "../components/RoomCard";

function Rooms({ rooms, onBook, onCancel }) {
  const [filter, setFilter] = useState("All");

  const filteredRooms = rooms.filter((room) => {
    return filter === "All" || room.type === filter;
  });

  const hasBooking = rooms.some(
    (room) => room.isBooked
  );

  return (
    <div className="container">
      <h1>All Hostel Rooms</h1>

      <label>Filter by Room Type: </label>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="AC">AC</option>
        <option value="Non-AC">Non-AC</option>
      </select>

      <div className="room-list">
        {filteredRooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            onBook={onBook}
            onCancel={onCancel}
            hasBooking={hasBooking}
          />
        ))}
      </div>
    </div>
  );
}

export default Rooms;
