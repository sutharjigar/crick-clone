const Players = () => {
  const southAfricaPlayers = [
    {
      name: "Keshav Maharaj",
      role: "Bowler",
      image: "/flags/india.png",
    },
    {
      name: "David Bedingham",
      role: "Batter",
      image: "/flags/india.png",
    },
    {
      name: "Kagiso Rabada",
      role: "Bowler",
      image: "/flags/india.png",
    },
    {
      name: "Temba Bavuma",
      role: "Batter, C",
      image: "/flags/india.png",
    },
    {
      name: "Kyle Verreynne",
      role: "Batter, WK",
      image: "/flags/india.png",
    },
    {
      name: "Wiaan Mulder",
      role: "All Rounder",
      image: "/flags/india.png",
    },
    {
      name: "Aiden Markram",
      role: "Batter",
      image: "/flags/india.png",
    },
    {
      name: "Ryan Rickelton",
      role: "Batter",
      image: "/flags/india.png",
    },
    {
      name: "Marco Jansen",
      role: "Bowler",
      image: "/flags/india.png",
    },
  ];

  const pakistanPlayers = [
    {
      name: "Shan Masood",
      role: "Batter, C",
      image: "/flags/india.png",
    },
    {
      name: "Babar Azam",
      role: "Batter",
      image: "/flags/india.png",
    },
    {
      name: "Muhammad Rizwan",
      role: "Batter, WK",
      image: "/flags/india.png",
    },
    {
      name: "Kamran Ghulam",
      role: "All Rounder",
      image: "/flags/india.png",
    },
    {
      name: "Muhammad Abbas",
      role: "Bowler",
      image: "/flags/india.png",
    },
    {
      name: "Mir Hamza",
      role: "Bowler",
      image: "/flags/india.png",
    },
    {
      name: "Saud Shakeel",
      role: "Batter",
      image: "/flags/india.png",
    },
    {
      name: "Khurram Shahzad",
      role: "Bowler",
      image: "/flags/india.png",
    },
    {
      name: "Salman Ali Agha",
      role: "All Rounder",
      image: "/flags/india.png",
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen p-4">
      {/* Header */}
      <div className="bg-blue-600 text-white text-center py-4 rounded-md mb-4">
        <div className="flex items-center justify-center space-x-2">
          <img src="/flags/india.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold">
            SA v PAK 2024/25 | 2nd Test Match
          </h1>
        </div>
      </div>

      {/* Teams and Ad Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-md shadow-lg mb-6">
        <div className="flex items-center space-x-2">
          <img
            src="/flags/india.png"
            alt="South Africa"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-lg font-semibold">South Africa</p>
        </div>

        <div className="text-sm text-center my-4 md:my-0">
          <p className="font-bold">Play Rummy on First Games</p>
          <button className="bg-blue-600 text-white py-1 px-3 rounded-full mt-2">
            Deposit Now
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <img
            src="/flags/india.png"
            alt="Pakistan"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-lg font-semibold">Pakistan</p>
        </div>
      </div>

      {/* Playing XI Section */}
      <div className="bg-white p-4 rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Playing XI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* South Africa */}
          <div>
            <h3 className="text-lg font-semibold mb-2">South Africa</h3>
            <ul className="space-y-2">
              {southAfricaPlayers.map((player, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{`${player.name} (${player.role})`}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pakistan */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Pakistan</h3>
            <ul className="space-y-2">
              {pakistanPlayers.map((player, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{`${player.name} (${player.role})`}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-4">
        <p>Data sourced from official cricket records.</p>
      </div>
    </div>
  );
};

export default Players;
