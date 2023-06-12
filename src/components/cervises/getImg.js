const URL = 'https://pixabay.com/api/';
const KEY = '34949231-97333589adf73858ce38633dc';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

export const getImg = (query, page = 1) => {
  return fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`).then(
    response => response.json()
  );
}