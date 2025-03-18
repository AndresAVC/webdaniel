import Card from "@/Components/Card";
import Nabvar from "@/Components/Navbar";
import { Link } from "@inertiajs/react";
export default function Index({games}) {
    return (
        <>
        <Nabvar></Nabvar>
        <Link href={route('games.create')} className="p-4 bg-black text-white rounded-lg">Crear nuevo</Link>
        <form>
        {games?.map((game) => (
            
            <Card key = {game.id} 
            name = {game.name} 
            classification={game.classification}
             price={game.price}
              genre={game.genre}/>
            
        ))}
        </form>
            <div>Hay {Object.keys(games).length} juegos en la base de datos</div>
        </>
    );
}
