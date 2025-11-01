import { useState } from "react";
import './form.css';

function EventForm() {
  const [club, setClub] = useState("");
  const [eventName, setEventName] = useState("");
  const [time, setTime] = useState("");
  const [rsvp, setRsvp] = useState("No");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      club,
      eventName,
      time,
      rsvp,
      description,
      location
    });
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Add your Club Event</h2>

      <label>Your Club Name</label>
      <input
        type="text"
        value={club}
        onChange={(e) => setClub(e.target.value)}
        required
      />

      <label>Event Name</label>
      <input
        type="text"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        required
      />

      <label>Event Time</label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />

      <label>Event Location</label>
      <input
        type="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <label>RSVP Required</label>
      <select value={rsvp} onChange={(e) => setRsvp(e.target.value)}>
        <option>No</option>
        <option>Yes</option>
      </select>

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
      ></textarea>

      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventForm;
