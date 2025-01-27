import { GamepadIcon, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="bg-[#52005B] text-white">
      <div className="flex justify-between items-center px-4 py-3">
        <GamepadIcon size={24} className="text-white" />
        <div className="flex items-center space-x-2">
          <img
            src="/logos/logo.png"
            alt="Cricket Fast Live Line"
            className="h-8"
          />
        </div>
        <Users size={24} className="text-white" />
      </div>

      <div className="flex justify-around text-lg font-medium border-b border-pink-800">
        <Link
          to="/"
          className={`py-2 px-8 ${
            location.pathname === "/"
              ? "text-white border-b-2 border-white"
              : "text-gray-400"
          }`}
        >
          LIVE
        </Link>
        <Link
          to="/upcoming"
          className={`py-2 px-8 ${
            location.pathname === "/upcoming"
              ? "text-white border-b-2 border-white"
              : "text-gray-400"
          }`}
        >
          UPCOMING
        </Link>
        <Link
          to="/finished"
          className={`py-2 px-8 ${
            location.pathname === "/finished"
              ? "text-white border-b-2 border-white"
              : "text-gray-400"
          }`}
        >
          FINISHED
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
