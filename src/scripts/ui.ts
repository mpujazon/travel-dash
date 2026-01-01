import { type CountryData } from './types';
export const renderPicture = (url: string, description: string | null): void => {
    const pictureElement = document.getElementById('city-picture');
    pictureElement?.setAttribute('data-alt', description || '');
    pictureElement?.setAttribute('style',`background-image: url(${url||''});`);
}

export const renderCountryDetails = (countryDetails: CountryData, cityName: string) => {
    const cityTitle = document.getElementById('city-title');
    cityTitle? cityTitle.textContent = `${cityName}, ${countryDetails.name.common}` : '';

    const flagContainer = document.getElementById('flag-container');
    flagContainer?.setAttribute('style', `background-image: url('${countryDetails.flags.svg}'); background-size: cover; background-position: center;`);

    const countryName = document.getElementById('country-name');
    countryName? countryName.textContent = countryDetails.name.common : '';

    const countrySubregion = document.getElementById('country-subregion');
    countrySubregion? countrySubregion.textContent = countryDetails.subregion : '';

    const countryPopulation = document.getElementById('country-population');
    countryPopulation? countryPopulation.textContent = countryDetails.population.toLocaleString() : '';

    const countryCurrency = document.getElementById('country-currency');
    const {name, symbol} = Object.values(countryDetails.currencies)[0];
    countryCurrency? countryCurrency.textContent = `${name} (${symbol})` : '';
}