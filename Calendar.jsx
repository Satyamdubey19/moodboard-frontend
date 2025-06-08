import React from "react";
import { moodColors } from "../utils/moodUtils";

export default function Calendar({ weekDates, moods, updateMood }) {
  function formatDate(date) {
    return date.toISOString().slice(0, 10); // YYYY-MM-DD
  }

  // Moods user can pick
  const moodOptions = ["Happy", "Neutral", "Sad"];

  // Handle mood change
  function onMoodChange(e, dateStr) {
    const mood = e.target.value;
    updateMood(dateStr, mood);
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "1rem", flexWrap: "wrap" }}>
      {weekDates.map((date) => {
        const dateStr = formatDate(date);
        const selectedMood = moods[dateStr] || "";
        return (
          <div
            key={dateStr}
            style={{
              width: "120px",
              padding: "10px",
              margin: "5px",
              borderRadius: "8px",
              backgroundColor: selectedMood ? moodColors[selectedMood] : "#ccc",
              color: selectedMood ? "#fff" : "#000",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              transition: "background-color 0.3s ease",
              userSelect: "none",
            }}
          >
            <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
              {date.toLocaleDateString(undefined, { weekday: "short", day: "numeric" })}
            </div>
            <select
              value={selectedMood}
              onChange={(e) => onMoodChange(e, dateStr)}
              style={{
                width: "100%",
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #888",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              <option value="">-- Select Mood --</option>
              {moodOptions.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
              <option value="">Clear Mood</option>
            </select>
          </div>
        );
      })}
    </div>
  );
}
