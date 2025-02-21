import { useState } from "react";
import OsuPlayerCard from "./OsuPlayerCard";

interface OsuPlayer {
    user_id: string;
    username: string;
    rank: string;
    pp: string;
    accuracy: string;
    country: string;
}

interface PlayerDataResponse {
    players?: OsuPlayer[];
    message?: string;
}

const App = () => {
    const [showCards, setShowCards] = useState<boolean>(false);
    const [playerData, setPlayerData] = useState<OsuPlayer[]>([]);

    const handleShowCards = async () => {
        setShowCards(true);
        try {
            const response = await fetch(
                "http://localhost:3000/api/card_request"
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data: PlayerDataResponse = await response.json();

            if (data.players) {
                const updatedPlayers = data.players.map((player) => ({
                    ...player,
                    pp: parseFloat(player.pp).toFixed(0),
                    accuracy: parseFloat(player.accuracy).toFixed(2),
                }));

                setPlayerData(updatedPlayers);
            } else {
                console.error("No player data found.");
            }
        } catch (error) {
            console.error("Error fetching player data:", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-950">
            {!showCards && (
                <button
                    onClick={handleShowCards}
                    className="bg-blue-500 text-white p-4 rounded-lg"
                >
                    Show Cards
                </button>
            )}

            {showCards && (
                <div className="flex justify-center items-center gap-5">
                    {playerData.length > 0 ? (
                        playerData.map((player, index) => (
                            <OsuPlayerCard
                                key={index}
                                username={player.username}
                                avatar={`https://a.ppy.sh/${player.user_id}`}
                                rank={player.rank}
                                pp={player.pp}
                                accuracy={player.accuracy}
                                country={player.country}
                            />
                        ))
                    ) : (
                        <div>No players found.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
