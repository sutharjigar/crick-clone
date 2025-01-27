import MatchCard from "../components/MatchCard";

const LiveMatches = () => {
  const matches = [
    {
      id: "1",
      type: "TEST",
      team1: {
        name: "SOUTH AFRICA",
        flag: "/flags/india.png",
        score: "464/5",
        overs: "119.2",
        runRate: "0/0 (0.0)",
      },
      team2: {
        name: "PAKISTAN",
        flag: "/flags/india.png",
        score: "0/0",
        overs: "0.0",
        runRate: "0/0 (0.0)",
      },
      date: "03 JAN 2025",
      time: "02:00 PM",
      series: "Pakistan in South Africa",
      venue: "South Africa",
      odds: {
        team1: "1.22",
        team2: "1.23",
      },
    },
    {
      id: "2",
      type: "TEST",
      team1: {
        name: "AFGHANISTAN",
        flag: "/flags/india.png",
        score: "166/6",
        overs: "59.5",
        runRate: "157/10 (44.3)",
      },
      team2: {
        name: "ZIMBABWE",
        flag: "/flags/india.png",
        score: "243/10",
        overs: "73.3",
        runRate: "0/0 (0.0)",
      },
      date: "02 JAN 2025",
      time: "01:30 PM",
      series: "Afghanistan in Zimbabwe",
      venue: "Zimbabwe",
      odds: {
        team1: "1.57",
        team2: "1.59",
      },
    },
    {
      id: "3",
      type: "T10",
      team1: {
        name: "GUARDIANS",
        flag: "/flags/india.png",
        score: "0/0",
        overs: "0.0",
        runRate: "0/0 (0.0)",
      },
      team2: {
        name: "WARRIORS B",
        flag: "/flags/india.png",
        score: "0/0",
        overs: "0.0",
        runRate: "0/0 (0.0)",
      },
      date: "04 JAN 2025",
      time: "07:00 PM",
      series: "Barbados T10, 2024-25",
      venue: "Barbados",
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

export default LiveMatches;
