import { Home, Menu, FileText, CheckSquare, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-green-800 to-green-600 text-white">
      <div className="flex justify-around items-center py-2">
        <Link to="/" className="flex flex-col items-center">
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/news" className="flex flex-col items-center">
          <Menu size={24} />
          <span className="text-xs mt-1">Menu</span>
        </Link>
        <Link to="/players" className="flex flex-col items-center">
          <FileText size={24} />
          <span className="text-xs mt-1">Players</span>
        </Link>
        <Link to="/matches" className="flex flex-col items-center">
          <CheckSquare size={24} />
          <span className="text-xs mt-1">Matches</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center">
          <Settings size={24} />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
