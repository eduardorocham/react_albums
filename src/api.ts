/*import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
}) */

const base = 'https://jsonplaceholder.typicode.com';


export const api = {
    getAlbums: async () => {
        const response = await fetch(`${base}/albums`);
        const json = await response.json();
        return json;
    },
    getAlbumInfo: async (id: string) => {
        const response = await fetch(`${base}/albums/${id}`);
        const json = await response.json();
        return json;
    },
    getPhotosFromAlbum: async (id: string) => {
        const response = await fetch(`${base}/albums/${id}/photos`);
        const json = await response.json();
        return json;
    },
    getPhoto: async (id: string) => {
        const response = await fetch(`${base}/photos/${id}`);
        const json = response.json();
        return json;
    }
}