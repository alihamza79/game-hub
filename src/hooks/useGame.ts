import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
export interface Platform{
  id:number,
  name:string
  slug:string
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:Platform}[]
    metacritic:number
  }
  
interface FetchGameData {
    count: number;
    results: Game[];
  }

const useGame = () => {


  const [games, setGames] = useState<Game[] | undefined>(undefined);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchGameData>("/games")
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        
        setError(err.message);
        setIsLoading(false);
      });
      
  }, []);
  return {games,error,isLoading};
}

export default useGame