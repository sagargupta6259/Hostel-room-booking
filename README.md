# Hostel Room Booking System

Advance Frontend Engineering — Assignment 7 (Phase 2)

## 📌 Student Details
- **Student Name:** Sagar Kumar Gupta
- **Roll Number / UID:** 260311021175
- **Problem Statement:** P1 — Hostel Room Booking
- **Live Vercel Deployment Link:** https://hostel-room-booking-red.vercel.app

---

## 🛠️ Tech Stack
- **Framework:** React 19 (Vite)
- **Routing:** React Router (`react-router`)
- **Styling:** Custom Modern CSS

---

## 🚀 Getting Started

Follow these steps to run the application locally:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 3. Build for Production
```bash
npm run build
```

---

## 📋 Features Implemented (P1 — Hostel Room Booking)
1. **Reusable RoomCard**: Displays room number, block, type, rent per month, and beds left (`capacity - occupied`).
2. **Badges**: Shows "Full" badge if occupied equals capacity, otherwise displays remaining beds count.
3. **Booking Logic**:
   - "Book Room" increments occupied count and marks room as booked.
   - "Cancel Booking" decrements occupied count and unmarks the room.
4. **Special Rule**: Only one room can be booked at a time. While a room is booked, other rooms indicate "Already booked another room".
5. **Filter**: Dropdown filter to filter by room type (`All`, `AC`, `Non-AC`).
6. **Room Details (`/rooms/:id`)**: Displays full room information including floor and facilities list.
7. **Home Page (`/`)**: Displays summary statistics for total rooms, rooms with beds left, and booked room status.
8. **My Booking (`/my-booking`)**: Displays user's booked room with details and option to cancel.
