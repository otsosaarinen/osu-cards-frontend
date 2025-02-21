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
    );
};

export default App;
