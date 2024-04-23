import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios"

export interface ItemResource {
  name: string;
  url: string;
}

export interface PokemonTypeResource {
  slot: number;
  type: ItemResource
}

export interface PokemonType {
  id: number;
  name: string;
  image: string;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {"other": {"official-artwork": {"front_default": string}}};
  types: PokemonTypeResource[]

}

interface FetchPokemonsResponse {
  count: number
  results: ItemResource[]
}

interface PokemonsByTypeResource{
  pokemon: ItemResource;
  slot: number
}

interface FetchPokemonsByTypeResponse {
  pokemon: PokemonsByTypeResource[]
}


export const fetchPokemonDetails = async (pokemons: ItemResource[], limit: number = 10) => {

  const pokemonDetailsPromises = pokemons.slice(0, limit).map(async (pokemon) => {
    const {
      id, name, height, weight, sprites, types
     } = (await apiClient.get<Pokemon>(pokemon.url)).data;

    return ({
      id, name, height, weight, sprites, types
     });
  });

  const pokemonDetails = await Promise.all(pokemonDetailsPromises);

  return pokemonDetails;
};


const usePokemons = (type?: PokemonType | null) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let response;
    const controller = new AbortController();
    setLoading(true)

    if(type) {
      response = apiClient.get<FetchPokemonsByTypeResponse>(`/type/${type.id}`).then(res => res.data.pokemon.map(item => item.pokemon)).then(res => fetchPokemonDetails(res))
    }else{
      response = apiClient.get<FetchPokemonsResponse>('/pokemon').then(res => fetchPokemonDetails(res.data.results));
    }
    
    response.then(data => {setPokemons(data)})
    .catch(error => {
      if(error instanceof CanceledError) return;
      setError(error.message)
    })
    .finally(() => setLoading(false));

    return () => controller.abort();
  
  }, [type]);

  return { pokemons, error, loading };
}

export default usePokemons