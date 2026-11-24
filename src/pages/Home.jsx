


function Home({ rooms }) {
  const totalRooms = rooms.length;

  const availableRooms = rooms.filter(
    (room) => room.occupied < room.capacity
  ).length;

  const bookedRoom = rooms.find(
    (room) => room.isBooked
  );

  return (
    <div className="container">
      <h1>Hostel Room Booking System</h1>

      <p>
        Welcome! Find and book your hostel room easily.
      </p>

      <div className="stats">
        <div className="stat-card">
          <h2>{totalRooms}</h2>
          <p>Total Rooms</p>
        </div>

        <div className="stat-card">
          <h2>{availableRooms}</h2>
          <p>Rooms with Beds Left</p>
        </div>

        <div className="stat-card">
          <h2>{bookedRoom ? bookedRoom.roomNo : "No booking yet"}</h2>
          <p>Your Booked Room</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

