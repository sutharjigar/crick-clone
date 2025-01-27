import MatchCard from "../components/MatchCard";

const FinishedMatches = () => {
  const matches = [
    {
      id: "4",
      type: "TEST",
      team1: {
        name: "India",
        flag: "/flags/india.png",
        score: "416/10",
        overs: "100.5",
      },
      team2: {
        name: "England",
        flag: "/flags/india.png",
        score: "353/10",
        overs: "89.3",
      },
      date: "01 JAN 2025",
      time: "02:00 PM",
      series: "England in India",
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

export default FinishedMatches;
