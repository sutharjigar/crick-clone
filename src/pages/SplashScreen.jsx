import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/splash");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen cricket-gradient flex flex-col items-center justify-between p-8 text-white">
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-bold mb-2 tracking-wider">5 MILLIONS+</h1>
        <p className="text-2xl tracking-wide mb-16">DOWNLOADS</p>

        <div className="w-full max-w-md">
          <img
            src="/logos/logo.png"
            alt="Cricket Fast Live Line"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="text-center w-full">
        <h2 className="text-3xl font-serif italic mb-2">Thank you</h2>
        <p className="text-xl font-serif tracking-wide italic">FOR YOUR LOVE</p>

        <div className="mt-8 text-gray-300">
          <p>This action may contain advertising</p>
          <p className="mt-2">Ad Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
