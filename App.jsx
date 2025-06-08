import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import MoodSummary from "./components/MoodSummary";
import MoodQuote from "./components/MoodQuote";
import { moodColors, moodValues } from "./utils/moodUtils";

const DAYS_IN_WEEK = 7;

function getWeekDates() {
  const dates = [];
  const today = new Date();
  for (let i = DAYS_IN_WEEK - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    dates.push(d);
  }
  return dates;
}

export default function App() {
  const [moods, setMoods] = useState(() => {
    // load from localStorage or empty object
    const saved = localStorage.getItem("moods");
    return saved ? JSON.parse(saved) : {};
  });

  const [weekDates, setWeekDates] = useState(getWeekDates);

  // Save moods to localStorage on change
  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(moods));
  }, [moods]);

  // Determine dominant mood to change background
  const moodScores = Object.entries(moods).reduce(
    (acc, [date, mood]) => acc + (moodValues[mood] || 0),
    0
  );
  const dominantMood = moodScores > 0 ? "Happy" : moodScores < 0 ? "Sad" : "Neutral";

  // Update mood for a day
  function updateMood(dateStr, mood) {
    setMoods((prev) => {
      const newMoods = { ...prev };
      if (mood) {
        newMoods[dateStr] = mood;
      } else {
        delete newMoods[dateStr];
      }
      return newMoods;
    });
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "1rem",
        backgroundColor: moodColors[dominantMood] || "#eee",
        transition: "background-color 0.5s ease",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>MoodBoard: Daily Mood Tracker</h1>
      <Calendar
        weekDates={weekDates}
        moods={moods}
        updateMood={updateMood}
      />
      <MoodSummary weekDates={weekDates} moods={moods} />
      <MoodQuote />
    </div>
  );
}
