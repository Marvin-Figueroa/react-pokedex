import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import axios, { CanceledError } from "axios"

export interface ItemResource {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {"other": {"official-artwork": {"front_default": string}}};
  types: [{slot: number, type: ItemResource}]

}

interface FetchPokemonsResponse {
  count: number
  results: ItemResource[]
}

const fetchPokemonDetails = async () => {
  const response = await apiClient.get<FetchPokemonsResponse>('/pokemon');

  const pokemonList = response.data.results;

  const pokemonDetailsPromises = pokemonList.map(async (pokemon) => {
    const {
      id, name, height, weight, sprites, types
     } = (await axios.get<Pokemon>(pokemon.url)).data;

    return ({
      id, name, height, weight, sprites, types
     });
  });

  const pokemonDetails = await Promise.all(pokemonDetailsPromises);

  return pokemonDetails;
};


const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    
    fetchPokemonDetails()
    .then(data => setPokemons(data))
    .catch(error => {
      if(error instanceof CanceledError) return;
      setError(error.message)
    })
    .finally(() => setLoading(false));

    return () => controller.abort()
  }, [])

  return {pokemons, error, loading}
}

export default usePokemons