
import { useState } from "react";
import { Routes, Route } from "react-router";
import initialRooms from "./data/room";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import MyBooking from "./pages/MyBooking";

function App() {
  const [rooms, setRooms] = useState(initialRooms);

  // Book Room
  const handleBook = (id) => {
    const alreadyBooked = rooms.some(
      (room) => room.isBooked
    );

    if (alreadyBooked) {
      alert("You can book only one room!");
      return;
    }

    setRooms(
      rooms.map((room) => {
        if (room.id === id) {
          if (room.occupied < room.capacity) {
            return {
              ...room,
              isBooked: true,
              occupied: room.occupied + 1
            };
          }
        }

        return room;
      })
    );
  };

  // Cancel Booking
  const handleCancel = (id) => {
    setRooms(
      rooms.map((room) => {
        if (room.id === id && room.isBooked) {
          return {
            ...room,
            isBooked: false,
            occupied: room.occupied - 1
          };
        }

        return room;
      })
    );
  };

  const bookedCount = rooms.filter(
    (room) => room.isBooked
  ).length;

  return (
    <>
      <Navbar bookedCount={bookedCount} />

      <Routes>
        <Route
          path="/"
          element={<Home rooms={rooms} />}
        />

        <Route
          path="/rooms"
          element={
            <Rooms
              rooms={rooms}
              onBook={handleBook}
              onCancel={handleCancel}
            />
          }
        />

        <Route
          path="/rooms/:id"
          element={
            <RoomDetails
              rooms={rooms}
              onBook={handleBook}
              onCancel={handleCancel}
            />
          }
        />

        <Route
          path="/my-booking"
          element={
            <MyBooking
              rooms={rooms}
              onCancel={handleCancel}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
