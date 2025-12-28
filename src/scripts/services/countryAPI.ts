import { type CountryData } from '../types';

export const fetchCountryDetails = async (countryCode: string): Promise<CountryData[]> => {
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    const response = await fetch(url);

    if(!response.ok){
        throw new Error(`Response status: ${response.status}`)
    }

    return await response.json();
}