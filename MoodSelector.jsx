import React from "react";

const moods = ["Happy", "Neutral", "Sad"];
const colors = {
  Happy: "#FFD93B",
  Neutral: "#6C757D",
  Sad: "#4A90E2",
};

export default function MoodSelector({ selectedMood, onSelect }) {
  return (
    <div style={{ marginTop: 10, display: "flex", justifyContent: "center", gap: 8 }}>
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(mood);
          }}
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: selectedMood === mood ? "3px solid black" : "1px solid #ccc",
            backgroundColor: colors[mood],
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          title={mood}
        />
      ))}
    </div>
  );
}
