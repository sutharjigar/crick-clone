import MatchCard from "../components/MatchCard";

const UpcomingMatches = () => {
  const matches = [
    {
      id: "3",
      type: "T10",
      team1: {
        name: "Guardians",
        flag: "/flags/india.png",
        score: "0/0",
        overs: "0.0",
      },
      team2: {
        name: "Warriors B",
        flag: "/flags/india.png",
        score: "0/0",
        overs: "0.0",
      },
      date: "04 JAN 2025",
      time: "07:00 PM",
      series: "Barbados T10, 2024-25",
    },
  ];

  return (
    <div className="pt-4 pb-20">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMatches;
