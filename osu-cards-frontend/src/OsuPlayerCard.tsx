import React from "react";

interface OsuPlayerCardProps {
    username: string;
    avatar: string;
    rank: number;
    pp: number;
    accuracy: number;
    country: string;
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
            <div className="bg-indigo-300 text-black rounded-lg w-72 h-100 flex flex-col justify-start items-center transform transition-all duration-150 hover:scale-105">
                <div className="">
                    <img
                        src={avatar}
                        alt="profile_picture"
                        className="w-full h-50 rounded-lg"
                    />
                </div>
                <div className="">{username}</div>
                <div className="">#{rank}</div>
                <div className="">{pp}pp</div>
                <div className="">{accuracy}%</div>
                <div className="">{country}</div>
            </div>
        </>
    );
};

export default OsuPlayerCard;
