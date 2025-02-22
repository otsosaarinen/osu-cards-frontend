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
            ? "bg-red-400 shadow-lg shadow-red-400/50"
            : rarity === "Ultra Rare"
            ? "bg-fuchsia-400 shadow-lg shadow-fuchsia-400/50"
            : rarity === "Rare"
            ? "bg-sky-400 shadow-lg shadow-sky-400/50"
            : "bg-slate-400 shadow-lg shadow-slate-400/50";

    return (
        <>
            {/* Player card container */}
            <div
                className={`${rarityColor} text-black rounded-lg w-70 h-90 flex flex-col justify-start items-center transform transition-all duration-150 hover:scale-105`}
            >
                <div className="">{rarity}</div>
                {/* Player avatar */}
                <div className="">
                    <img
                        src={avatar}
                        alt="profile_picture"
                        className="w-full h-30 rounded-lg"
                    />
                </div>
                {/* Display player details */}
                <div className="">{username}</div>
                <div className="">#{rank}</div>
                <div className="">{pp}pp</div>
                <div className="">{accuracy}%</div>
                <div className="">
                    <img src={country} alt="country_flag" />
                </div>
            </div>
        </>
    );
};

export default OsuPlayerCard;
