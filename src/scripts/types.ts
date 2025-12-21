export interface CountryData{
    name:{
        common: string
    },
    flags:{
        svg: string
    },
    subregion: string,
    currencies: Record<string, { name: string; symbol: string }>,
    population: number,

}

export interface WeatherData{
    temperature: string,
    description: string,
    iconSrc: string
    humidity: string,
    windSpeed: string,
}