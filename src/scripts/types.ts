export interface CountryData{
    name:{
        common: string;
    };
    flags:{
        svg: string;
    };
    subregion: string;
    currencies: Record<string, { name: string; symbol: string }>;
    population: number;
}

export interface WeatherData{
    main:{
        temp: number;
        humidity: number;
    };
    sys:{
        country: string;
    };
    weather:{
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
    }
    name: string;
}

export interface PhotoData{
    urls: {
        regular: string;
        small: string;
    };
    alt_description: string | null;
}