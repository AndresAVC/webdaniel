import { Link } from "@inertiajs/react"
export default function Nabvar() {
  return (
    <div className="p-8 bg-black text-white font-bold">
      <Link className="p-8 hover:text-yellow-300" href="/movies">pelicula</Link>
      <Link className="p-8 hover:text-yellow-300" href="/games">Juegos</Link>
      <Link className="p-8 hover:text-yellow-300" href="/songs">Musica</Link>
    </div>
  )
}
