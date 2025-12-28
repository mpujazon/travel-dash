import type { PhotoData } from "../types";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchCityPicture = async (cityName: string): Promise<PhotoData> => {
    const url = `https://api.unsplash.com/photos/random?query=${cityName} architecture&client_id=${UNSPLASH_KEY}&orientation=landscape`
    
    const response = await fetch(url);

    if(!response.ok){
        throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
}