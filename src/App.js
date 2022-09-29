import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import EventPage from "./pages/EventPage/EventPage";
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="event" element={<EventPage />} />
        <Route path="create" element={<CreateEventPage />} />
      </Routes>
    </div>
  );
}

export default App;
