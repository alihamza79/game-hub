import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
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
  }
  
interface FetchGameData {
    count: number;
    results: Game[];
  }

const useGame = () => {
const [games, setGames] = useState<Game[] | undefined>(undefined);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameData>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return {games,error}
}

export default useGame