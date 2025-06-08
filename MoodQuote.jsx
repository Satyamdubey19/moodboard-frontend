import React, { useEffect, useState } from "react";

export default function MoodQuote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await fetch("https://api.quotable.io/random");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setQuote(data);
      } catch (e) {
        setQuote({ content: "Stay positive and keep moving forward!", author: "Unknown" });
      }
    }
    fetchQuote();
  }, []);

  return (
    <div
      style={{
        marginTop: "2rem",
        padding: "1rem",
        border: "1px solid #aaa",
        borderRadius: "10px",
        maxWidth: "500px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#fafafa",
        fontStyle: "italic",
      }}
    >
      <p>"{quote ? quote.content : "Loading quote..."}"</p>
      <p style={{ textAlign: "right", fontWeight: "bold", marginTop: "0.5rem" }}>
        - {quote ? quote.author : ""}
      </p>
    </div>
  );
}
