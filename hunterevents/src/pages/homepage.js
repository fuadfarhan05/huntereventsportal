
import React, { useState } from 'react';

import '../App.css';


// Reusable component
function EventCard({ title, club, time, location, logo}) {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      padding: "16px",
      marginBottom: "16px"
    }}>
      <h2>{title}</h2>
      <p style={{ color: "#666" }}>{club}</p>
      <p>📅 {time} | 📍 {location}</p>
      <button style={{
        backgroundColor: "#7B68EE",
        color: "white",
        border: "none",
        borderRadius: "6px",
        padding: "8px 12px",
        cursor: "pointer",
        marginTop: "8px"
      }}>View Details</button>
    </div>
  );
}

// Main homepage
export default function Home() {

  const [search, setSearch] = useState("");
  const events = [
    { title: "Anime Club Meetup", club: "Anime Society", time: "3:00 PM", location: "Room 412" },
    { title: "Career Workshop", club: "Career Club", time: "2:00 PM", location: "Room 215" },
    { title: "Chess Tournament", club: "Chess Club", time: "5:00 PM", location: "Room 310" },
  ];



  const filteredEvents = events.filter(e =>
    e.title.toLowerCase().includes(search.toLowerCase()) ||
    e.club.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="homepage" style={{ padding: "24px", backgroundColor: "#F8F9FA", minHeight: "100vh" }}>
      <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h1 style={{ color: "#4B0082" }}>Hunter Events Portal</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button>Submit Event</button>
          <button>Calendar View</button>
        </div>
      </header>

      <input
        type="text"
        placeholder="Search for events or clubs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "20px" }}
      />

      <div>
        {filteredEvents.length > 0 ? filteredEvents.map((event, i) => <EventCard key={i} {...event} />) : <p>No events found.</p>}
      </div>
    </div>
  );
}