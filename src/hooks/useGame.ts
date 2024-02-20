
import { gameQuery } from "../App";
import useData from "../hooks/useData"
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
  


const useGame = (gameQuery : gameQuery) => useData<Game>('/games',
  {params: {
    genres:gameQuery.genre?.id,
    platforms:gameQuery.platform?.id,
    ordering :gameQuery.sortOrder
  }},
  [gameQuery.genre?.id,gameQuery.platform?.id,gameQuery.sortOrder]);

export default useGame