import Card from "@/Components/Card";
export default function Index({games}) {
    return (
        <>
        <form>
        {games?.map((game) => (
            
            <Card key = {game.id} name = {game.name} classification={game.classification}
             price={game.price} genre={game.genre}/>
            // <div key="{game.id}">
            // <h1>{game.name}</h1>
            // <h1>{game.classification}</h1>
            // <h1>{game.genre}</h1>
            // <h1>{game.price}</h1>
            // </div>
        ))}
        </form>
            <div>Hay {Object.keys(games).length} juegos en la base de datos</div>
        </>
    );
}
