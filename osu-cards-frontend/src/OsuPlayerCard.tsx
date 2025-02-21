import React from "react";

interface OsuPlayerCardProps {
    username: string;
    avatar: string;
    rank: number;
    pp: number;
    accuracy: number;
    country: string; // ISO country code (e.g., "US", "JP")
}

const OsuPlayerCard: React.FC<OsuPlayerCardProps> = ({
    username,
    avatar,
    rank,
    pp,
    accuracy,
    country,
}) => {
    return (
        <div className="relative w-72 bg-gradient-to-br from-purple-600 to-blue-500 p-1 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            {/* Card Container */}
            <div className="bg-gray-900 text-white rounded-xl p-4">
                {/* Avatar & Country */}
                <div className="flex justify-center relative">
                    <img
                        src={avatar}
                        alt={`${username}'s avatar`}
                        className="w-24 h-24 rounded-full border-4 border-white"
                    />
                    <img
                        src={`https://flagcdn.com/w40/${country.toLowerCase()}.png`}
                        alt={country}
                        className="absolute top-0 right-0 w-8 h-6 rounded shadow-md"
                    />
                </div>

                {/* Player Info */}
                <h2 className="text-xl font-bold text-center mt-2">
                    {username}
                </h2>

                {/* Stats */}
                <div className="mt-3 space-y-2 text-center">
                    <p className="text-lg">
                        <span className="font-semibold">Rank:</span> #{rank}
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">
                            Performance Points:
                        </span>{" "}
                        {pp}pp
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">Accuracy:</span>{" "}
                        {accuracy}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OsuPlayerCard;
