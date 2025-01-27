const MatchCard = ({ match }) => {
  return (
    <div className="mx-4 mb-4 bg-white rounded-lg overflow-hidden shadow-sm md:shadow-lg">
      <div className="bg-red-500 text-white text-xs sm:text-sm px-4 py-1 flex  justify-between">
        <span>LIVE | {match.type}</span>
        <span>
          {match.date} {match.time}
        </span>
      </div>

      <div className="p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          {/* Team 1 */}
          <div className="flex-1 mb-4 sm:mb-0">
            <div className="flex items-center space-x-3">
              <img
                src={match.team1.flag}
                alt={match.team1.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <div>
                <div className="text-sm sm:text-lg font-bold">
                  {match.team1.name}
                </div>
                <div className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs sm:text-sm">
                  {match.team1.score}
                </div>
                <div className="text-gray-500 text-xs sm:text-sm mt-1">
                  ({match.team1.overs})
                </div>
              </div>
            </div>
            <div className="text-gray-600 text-xs sm:text-sm mt-1">
              {match.team1.runRate}
            </div>
          </div>

          {/* VS Text */}
          <div className="text-lg sm:text-xl font-bold text-gray-400 my-2 sm:my-0 mx-0 sm:mx-4">
            VS
          </div>

          {/* Team 2 */}
          <div className="flex-1 text-right">
            <div className="flex items-center justify-end space-x-3">
              <div>
                <div className="text-sm sm:text-lg font-bold">
                  {match.team2.name}
                </div>
                <div className="bg-green-600 text-white px-2 py-1 rounded-md text-xs sm:text-sm">
                  {match.team2.score}
                </div>
                <div className="text-gray-500 text-xs sm:text-sm mt-1">
                  ({match.team2.overs})
                </div>
              </div>
              <img
                src={match.team2.flag}
                alt={match.team2.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
            </div>
            <div className="text-gray-600 text-xs sm:text-sm mt-1">
              {match.team2.runRate}
            </div>
          </div>
        </div>

        <div className="text-pink-500 text-xs sm:text-sm">{match.series}</div>
        {match.venue && (
          <div className="text-gray-600 text-xs sm:text-sm">{match.venue}</div>
        )}

        {match.odds && (
          <div className="flex justify-between mt-2">
            <span className="text-blue-600 font-bold">{match.odds.team1}</span>
            <span className="text-gray-400">|</span>
            <span className="text-blue-600 font-bold">{match.odds.team2}</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default MatchCard;
