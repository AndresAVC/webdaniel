export default function Card({name, classification, price, genre}){
    return(
        <div>
            <h1>{name}</h1>
            <h1>{classification}</h1>
            <h1>{price}</h1>
            <h1>{genre}</h1>

        </div>
    )
}