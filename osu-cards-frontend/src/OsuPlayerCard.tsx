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
}) => {
    return (
        <div className="">
            <div className="">
                <div className="">
                    <img
                        src={avatar}
                        alt={`${username}'s avatar`}
                        className=""
                    />
                </div>

                <h2 className="">{username}</h2>

                <div className="">
                    <p className="">
                        <span className="">Rank:</span> #{rank}
                    </p>
                    <p className="">
                        <span className="">Performance Points:</span> {pp}pp
                    </p>
                    <p className="">
                        <span className="">Accuracy:</span> {accuracy}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OsuPlayerCard;
