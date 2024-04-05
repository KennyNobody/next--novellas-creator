import axios from 'axios';

export const $api = axios.create({
    // baseURL: `${__BASE_URL__}/api/`,
    baseURL: 'https://api.novellascreator.ru/api/collections/news/entries',
});
