import OsuPlayerCard from "./OsuPlayerCard";

const App = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-950 gap-5">
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
                avatar="https://a.ppy.sh/1000140.png"
                rank={1}
                pp={25000}
                accuracy={98.99}
                country="KR"
            />
        </div>
    );
};

export default App;
