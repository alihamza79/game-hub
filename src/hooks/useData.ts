import  { useEffect, useState } from 'react'
import apiClient from '../services/api-client';


interface FetchGenreData<T>{
    count:number,
    results:T[]
}
const useGenre = <T>(endpoint:string) => {


  const [data, setData] = useState<T[]>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchGenreData<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        
        setError(err.message);
        setIsLoading(false);
      });
      
  }, []);
  return {data,error,isLoading};
}

export default useGenre