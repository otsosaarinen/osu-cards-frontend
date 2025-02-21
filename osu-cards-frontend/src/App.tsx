import OsuPlayerCard from "./OsuPlayerCard";

const App = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-950">
            <OsuPlayerCard
                username="Vaxei"
                avatar="https://a.ppy.sh/4787150.png"
                rank={2}
                pp={14000}
                accuracy={99.56}
                country="US" // ISO country code
            />
        </div>
    );
};

export default App;
