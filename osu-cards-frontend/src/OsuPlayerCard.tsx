import React from "react";

// Define the expected props for the OsuPlayerCard component
interface OsuPlayerCardProps {
    username: string; // Player's username
    avatar: string; // URL to player's avatar image
    rank: number; // Player's global rank
    pp: number; // Player's performance points (pp)
    accuracy: number; // Player's accuracy percentage
    country: string; // Player's country code
    rarity: string; // Player's rarity
}

const OsuPlayerCard: React.FC<OsuPlayerCardProps> = ({
    username,
    avatar,
    rank,
    pp,
    accuracy,
    country,
    rarity,
}) => {
    const rarityColor =
        rarity === "Legendary"
            ? "bg-linear-to-b from-red-400 to-pink-400 shadow-md shadow-red-400/50"
            : rarity === "Ultra Rare"
            ? "bg-linear-to-b from-fuchsia-400 to-violet-400 shadow-md shadow-fuchsia-400/50"
            : rarity === "Rare"
            ? "bg-linear-to-b from-sky-400 to-cyan-400 shadow-md shadow-sky-400/50"
            : "bg-slate-400 shadow-md shadow-slate-400/50";

    return (
        <>
            {/* Player card container */}
            <div
                className={`${rarityColor} text-stone-900 border-3 border-white rounded-lg w-70 h-90 flex flex-col justify-start items-center transform transition-all duration-150 hover:scale-105 hover:shadow-lg`}
            >
                <div className="font-bold uppercase text-xl font-poppins">
                    {rarity}
                </div>
                {/* Player avatar */}
                <div className="">
                    <img
                        src={avatar}
                        alt="profile_picture"
                        className="w-full h-40 object-cover rounded-lg"
                    />
                </div>
                {/* Display player details */}
                <div className="">{username}</div>
                <div className="">#{rank}</div>
                <div className="">{pp}pp</div>
                <div className="">{accuracy}%</div>
                <div className="">
                    <img src={country} alt="flag" />
                </div>
            </div>
        </>
    );
};

export default OsuPlayerCard;
