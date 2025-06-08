# moodboard-frontend
# MoodBoard: Daily Mood Tracker with Dynamic UI

> A single-page React application that allows users to track and visualize their mood throughout the week using a dynamic and responsive interface.

 Features
 **Calendar Mood Tracking**  
  Select a mood (Happy, Neutral, Sad) for each day in the current week only.

 **Color-Coded Mood Palette**  
  Moods are visually represented using custom colors for better UI/UX.

 **Editable Mood History**  
  Click on a previous day to update or delete a mood.
 *Dynamic Summary Component**
  - Most common mood of the week
  - Count of good/bad mood days
  - Mood trend graph using custom logic (no chart libraries)

**Adaptive Background Color**  
  Background changes based on the dominant mood of the week.

 **Animated Mood Transitions**  
  Smooth mood change transitions using CSS animations.

 **Mood Quote of the Day**  
  Fetched from a public API to motivate or reflect user mood.
 **LocalStorage Support**  
  Persists mood data between sessions without a backend.

##  Tech Stack

- **Frontend**: React (Vite)
- **Styling**: CSS (No Tailwind), Responsive Layouts
- **State**: useState, useEffect
- **Persistence**: LocalStorage
- **API**: [Quotable API](https://api.quotable.io/) for quote of the day

---

##  Getting Started

###  Prerequisites

- Node.js (v14 or above)
- npm 

### 📁Project Setup

```bash
# Clone the repo
git clone https://github.com/Satyamdubey19![Screenshot 2025-06-09 043049](https://github.com/user-attachments/assets/63834d6f-fd0c-448d-9db4-0a4eea1f713a)
/moodboard-frontend.git

# Navigate to project directory
cd moodboard-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
