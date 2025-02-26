import InputLabel from "@/Components/InputLabel";
import Nabvar from "@/Components/Navbar";
import TextInput from "@/Components/TextInput";
import axios from "axios";
import { useState } from "react";

export default function create() {
    const [name, setName] = useState();
    const [classification, setClassification] = useState();
    const [price, setPrice] = useState();
    const [genre, setGenre] = useState();

    const [error, SetError] = useState(true);

    const Submit = (e) =>{
      e.preventDefault();

      console.log(name)
      console.log(classification)
      console.log(price)
      console.log(genre)

      if(name === ''){
        console.log('El campo no puede estar vacio');
        return;
      }
      axios.post(route('games.store'),{
        name:name,
        classification:classification,
        genre:genre,
        price:price,
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error)
      });
    }
  return (
    <>
    <Nabvar></Nabvar>
    <div>
      Crear nuevo juego
    </div>
    <form onSumint="{submit}">  
        <h1>
            {name}
        </h1>
        <InputLabel htmlFor="name" value="Name" />
        <TextInput name="name" value={name} onChange={(e) => setName(e.target.value)}></TextInput>
          <InputLabel htmlFor="clasificacion" value="classification" />
        <TextInput name="Clasificacion" value={classification} onChange={(e) => setClassification(e.target.value)}></TextInput>
        <InputLabel htmlFor="price" value="price" />
        <TextInput name="price" value={price} onChange={(e) => setPrice(e.target.value)}></TextInput>
        <InputLabel htmlFor="genre" value="genre" />
        <TextInput name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}></TextInput>
        {error && (
          <button class="bg-black text-white p-4 rounded-lg" onClick={Submit}>Guardar</button>
        )}
       
        {/* Agregar 3 input mas con diseño*/}
    </form>
    </>
  )
}
