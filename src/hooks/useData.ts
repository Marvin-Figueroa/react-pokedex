import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError } from "axios"

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    
    apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
    .then(res => setData(res.data.results))
    .catch(error => {
      if(error instanceof CanceledError) return;
      setError(error.message)
    })
    .finally(() => setLoading(false));

    return () => controller.abort()
  }, [endpoint])

  return {data, error, loading}
}

export default useData