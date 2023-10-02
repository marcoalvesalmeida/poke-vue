import { api } from "./api";

interface GenericResponse {
    success: boolean,
    error?: string
}

export type PokemonData = {
    id?: number,
    name: string,
    height?: number,
    base_experience?: number,
    url?: string
    sprites?: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    } 
}

interface ListPokemonData extends GenericResponse {
    data?: PokemonData[]
}

interface UniquePokemonData extends GenericResponse {
    data?: PokemonData
}

async function getAll(): Promise<ListPokemonData> {
    try{
        const { data } = await api.get('pokemon?limit=200&offset=0');

        return {
            success: true,
            data: data.results,
        }
    }catch(e){
        return {
            success: true,
            error: (e as Error).message
        }
    }
}

async function getById(id: string): Promise<UniquePokemonData>{
    try{
        const { data } = await api.get(`/pokemon/${id}`);

        return {
            success: true,
            data: data,
        }
    }catch(e){
        return {
            success: true,
            error: (e as Error).message
        }
    }
}

export {
    getAll,
    getById
}