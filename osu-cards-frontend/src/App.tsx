import { useState } from "react";
import OsuPlayerCard from "./OsuPlayerCard";

// Define the type for each player
interface OsuPlayer {
    user_id: string;
    username: string;
    rank: string;
    pp: string;
    accuracy: string;
    country: string;
}

// Define the type for the API response data
interface PlayerDataResponse {
    players?: OsuPlayer[]; // Optional array of players
    message?: string; // Optional message, in case no players are found
}

const App = () => {
    const [showCards, setShowCards] = useState<boolean>(false); // State to control visibility of the cards
    const [playerData, setPlayerData] = useState<OsuPlayer[]>([]); // State to store player data, typed as an array of OsuPlayer

    // Function to show the cards and fetch player data from the server when the button is clicked
    const handleShowCards = async () => {
        setShowCards(true);
        try {
            // Make a GET request to the Express server
            const response = await fetch("/api/card_request");

            // Check if response is OK before proceeding
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data: PlayerDataResponse = await response.json(); // Type the response as PlayerDataResponse

            // Set the player data in state
            if (data.players) {
                setPlayerData(data.players); // Set the players from the response
            } else {
                console.error("No player data found.");
            }
        } catch (error) {
            console.error("Error fetching player data:", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-950">
            {/* Render the button only if showCards is false */}
            {!showCards && (
                <button
                    onClick={handleShowCards}
                    className="bg-blue-500 text-white p-4 rounded-lg"
                >
                    Show Cards
                </button>
            )}

            {/* Render the cards only when showCards is true */}
            {showCards && (
                <div className="flex justify-center items-center gap-5">
                    {playerData.length > 0 ? (
                        playerData.map((player, index) => (
                            <OsuPlayerCard
                                key={index}
                                username={player.username}
                                avatar={`https://a.ppy.sh/${player.user_id}`} // assuming the avatar URL is dynamic like this
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
