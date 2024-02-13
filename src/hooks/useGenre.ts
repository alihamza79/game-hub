
import useData from '../hooks/useData'

export interface Genre{
    id:number,
    name:string
    image_background: string;
}

const useGenre = () => {return useData<Genre>('/genres')}

export default useGenre