import React from "react";

// Define the expected props for the OsuPlayerCard component
interface OsuPlayerCardProps {
    username: string; // Player's username
    avatar: string; // URL to player's avatar image
    rank: string; // Player's global rank
    pp: string; // Player's performance points (pp)
    accuracy: string; // Player's accuracy percentage
    country: string; // Player's country code
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
        <>
            {/* Player card container */}
            <div className="bg-indigo-300 text-black rounded-lg w-72 h-100 flex flex-col justify-start items-center transform transition-all duration-150 hover:scale-105">
                {/* Player avatar */}
                <div className="">
                    <img
                        src={avatar}
                        alt="profile_picture"
                        className="w-full h-50 rounded-lg"
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
