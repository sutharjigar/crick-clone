import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LiveMatches from "./pages/LiveMatches";
import UpcomingMatches from "./pages/UpcomingMatches";
import FinishedMatches from "./pages/FinishedMatches";
import Scores from "./pages/Scores";
import Matches from "./pages/Matches";
import Players from "./pages/Players";
import BottomNav from "./components/BottomNav";
import Navbar from "./components/Navbar";
import SplashScreen from "./pages/SplashScreen";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-[#52005B]">
              <Navbar />
              <Routes>
              <Route path="/splash" element={<LiveMatches />} />
                <Route path="/upcoming" element={<UpcomingMatches />} />
                <Route path="/finished" element={<FinishedMatches />} />
                <Route path="/scores" element={<Scores />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/players" element={<Players />} />
              </Routes>
              <BottomNav />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
