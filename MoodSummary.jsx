import React from "react";
import { moodValues, moodColors } from "../utils/moodUtils";

export default function MoodSummary({ weekDates, moods }) {
  const moodCount = { Happy: 0, Neutral: 0, Sad: 0 };
  let totalScore = 0;

  weekDates.forEach((date) => {
    const key = date.toISOString().slice(0, 10);
    const mood = moods[key];
    if (mood) {
      moodCount[mood] = (moodCount[mood] || 0) + 1;
      totalScore += moodValues[mood] || 0;
    }
  });

  // Find most common mood
  const mostCommonMood = Object.entries(moodCount).reduce(
    (max, curr) => (curr[1] > max[1] ? curr : max),
    ["None", 0]
  )[0];

  // Good days = Happy, Neutral, Bad days = Sad
  const goodDays = (moodCount.Happy || 0) + (moodCount.Neutral || 0);
  const badDays = moodCount.Sad || 0;

  // Custom pie chart logic (basic)
  const totalDays = goodDays + badDays;
  const happyPercent = (moodCount.Happy / totalDays) * 100 || 0;
  const neutralPercent = (moodCount.Neutral / totalDays) * 100 || 0;
  const sadPercent = (moodCount.Sad / totalDays) * 100 || 0;

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 0 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Weekly Mood Summary</h3>
      <p style={{ textAlign: "center", margin: "0.5rem 0" }}>
        Most common mood: <strong>{mostCommonMood}</strong>
      </p>
      <p style={{ textAlign: "center", margin: "0.5rem 0" }}>
        Good mood days: <strong>{goodDays}</strong> | Bad mood days: <strong>{badDays}</strong>
      </p>

      {/* Pie chart using divs and CSS */}
      <div
        style={{
          marginTop: "1rem",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: `conic-gradient(
            ${moodColors.Happy} 0% ${happyPercent}%,
            ${moodColors.Neutral} ${happyPercent}% ${happyPercent + neutralPercent}%,
            ${moodColors.Sad} ${happyPercent + neutralPercent}% 100%
          )`,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "1rem" }}>
        <div>
          <span
            style={{
              display: "inline-block",
              width: "15px",
              height: "15px",
              backgroundColor: moodColors.Happy,
              borderRadius: "50%",
              marginRight: "5px",
            }}
          />
          Happy ({moodCount.Happy})
        </div>
        <div>
          <span
            style={{
              display: "inline-block",
              width: "15px",
              height: "15px",
              backgroundColor: moodColors.Neutral,
              borderRadius: "50%",
              marginRight: "5px",
            }}
          />
          Neutral ({moodCount.Neutral})
        </div>
        <div>
          <span
            style={{
              display: "inline-block",
              width: "15px",
              height: "15px",
              backgroundColor: moodColors.Sad,
              borderRadius: "50%",
              marginRight: "5px",
            }}
          />
          Sad ({moodCount.Sad})
        </div>
      </div>
    </div>
  );
}
