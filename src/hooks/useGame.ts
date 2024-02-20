
import { gameQuery } from "../App";
import useData from "../hooks/useData"
import { Genre } from './useGenre';
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
    platforms:gameQuery.platform?.id}},
  [gameQuery.genre?.id,gameQuery.platform?.id]);

export default useGame