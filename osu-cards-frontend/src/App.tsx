import { useState } from "react";
import OsuPlayerCard from "./OsuPlayerCard";

const App = () => {
    const [showCards, setShowCards] = useState(false); // State to control visibility of the cards

    // Function to show the cards when the button is clicked
    const handleShowCards = () => {
        setShowCards(true);
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
                    <OsuPlayerCard
                        username="Aetherian"
                        avatar="https://a.ppy.sh/6263040"
                        rank={37432}
                        pp={6679}
                        accuracy={98.56}
                        country="FI"
                    />
                    <OsuPlayerCard
                        username="Cookiezi"
                        avatar="https://a.ppy.sh/1000140"
                        rank={1}
                        pp={25000}
                        accuracy={98.99}
                        country="KR"
                    />
                    <OsuPlayerCard
                        username="Freddie Benson"
                        avatar="https://a.ppy.sh/7342622"
                        rank={1}
                        pp={21032}
                        accuracy={97.65}
                        country="US"
                    />
                </div>
            )}
        </div>
    );
};

export default App;
