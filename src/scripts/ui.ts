export const renderPicture = (url: string, description: string | null): void => {
    const pictureElement = document.getElementById('city-picture');
    pictureElement?.setAttribute('data-alt', description || '');
    pictureElement?.setAttribute('style',`background-image: url(${url||''});`);
}