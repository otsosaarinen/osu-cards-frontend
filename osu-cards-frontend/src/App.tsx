import OsuPlayerCard from "./OsuPlayerCard";

const App = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-950">
            <OsuPlayerCard
                username="Aetherian"
                avatar="https://a.ppy.sh/6263040"
                rank={37432}
                pp={6679}
                accuracy={98.56}
                country="FI"
            />
        </div>
    );
};

export default App;
