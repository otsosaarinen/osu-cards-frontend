import { useState } from "react";
import OsuPlayerCard from "./OsuPlayerCard";

// Define the structure of an OsuPlayer object
interface OsuPlayer {
    user_id: string;
    username: string;
    rank: string;
    pp: string;
    accuracy: string;
    country: string;
}

// Define the expected structure of the API response
interface PlayerDataResponse {
    players?: OsuPlayer[];
    message?: string;
}

const App = () => {
    // State to control whether the pack is open
    const [isPackOpen, setIsPackOpen] = useState<boolean>(false);

    // State to store fetched player data
    const [playerData, setPlayerData] = useState<OsuPlayer[]>([]);

    // Function to fetch player data from the API and update state
    const handleOpenPack = async () => {
        setIsPackOpen(true); // Set the pack as open
        try {
            // Fetch data from the backend API
            const response = await fetch(
                "http://localhost:3000/api/card_request"
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data: PlayerDataResponse = await response.json();

            // If players exist in the response, format their data
            if (data.players) {
                const updatedPlayers = data.players.map((player) => ({
                    ...player,
                    pp: parseFloat(player.pp).toFixed(0), // Convert PP to integer format
                    accuracy: parseFloat(player.accuracy).toFixed(2), // Keep accuracy to 2 decimal places
                }));

                setPlayerData(updatedPlayers); // Update state with formatted player data
            } else {
                console.error("No player data found.");
            }
        } catch (error) {
            console.error("Error fetching player data:", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-950">
            {/* Show button only if the pack is not open */}
            {!isPackOpen && (
                <button
                    onClick={handleOpenPack}
                    className="bg-blue-500 text-white p-4 rounded-lg"
                >
                    Open Pack
                </button>
            )}

            {/* Display player cards if data is available */}
            {isPackOpen && (
                <div className="flex flex-col items-center gap-5">
                    {/* Display 'Cards:' text if players data exists */}
                    {playerData.length > 0 && (
                        <div className="text-white">Cards:</div>
                    )}

                    {/* Cards container with flex-row for horizontal arrangement */}
                    <div className="flex flex-row gap-5">
                        {playerData.length > 0 ? (
                            playerData.map((player, index) => (
                                <OsuPlayerCard
                                    key={index} // Assign a unique key to each card
                                    username={player.username}
                                    avatar={`https://a.ppy.sh/${player.user_id}`} // Avatar URL based on user ID
                                    rank={player.rank}
                                    pp={player.pp}
                                    accuracy={player.accuracy}
                                    country={`https://assets.ppy.sh/old-flags/${player.country}.png`}
                                />
                            ))
                        ) : (
                            <div className="text-white">No cards found</div> // Show message if no data is available
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
