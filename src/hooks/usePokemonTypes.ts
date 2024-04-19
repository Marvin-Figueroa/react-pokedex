import { useEffect, useState } from "react"
import apiClient from "../services/apiClient";
import { ItemResource } from "./usePokemons";
import { CanceledError } from "axios";

interface FetchPokemonTypesResponse {
  count: number
  results: ItemResource[]
}

const usePokemonTypes = () => {
  const [pokemonTypes, setPokemonTypes] = useState<ItemResource[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    
    apiClient.get<FetchPokemonTypesResponse>('/type')
    .then(res => setPokemonTypes(res.data.results))
    .catch(error => {
      if(error instanceof CanceledError) return;
      setError(error.message)
    })
    .finally(() => setLoading(false));

    return () => controller.abort()
  }, [])

  return {pokemonTypes, error, loading}
}

export default usePokemonTypes