import { useState, useEffect } from 'react'
import { api } from '@utils/axiosConfig'

// This Hook works to get simple data from api
// endPoint: is the url where the data is stored,

const useGetData = <DataType>(endPoint: string, updater?: boolean): [DataType[], boolean, any] => {
  const [data, setData] = useState<DataType[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  // Effect to set loading and getData from api
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await api.get(endPoint)
        setData(result.data)
      } catch (error: any) {
        setError(error)
      }
      setLoading(false)
    }
    fetchData()
  }
  , [updater])

  return [data, loading, error]
}

export { useGetData }
