import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios"

interface Pokemon {
  id: number
  name: string
}

interface FetchPokemonsResponse {
  count: number
  results: Pokemon[]
}

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    apiClient
      .get<FetchPokemonsResponse>('/pokemon', {signal: controller.signal})
      .then((response) => setPokemons(response.data.results))
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setError(error.message)
      })
      .finally(() => setLoading(false))

      return () => controller.abort()
  }, [])

  return {pokemons, error, loading}
}

export default usePokemons