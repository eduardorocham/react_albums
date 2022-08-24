import { useState, useEffect } from "react";
import { Album } from '../types/Album';
import { AlbumItem } from "../components/AlbumItem";
import { api } from "../api";

export const Home = () => {
    const [list, setList] = useState<Album[]>([])
    const [loading, setLoading] = useState(false);

    const api = {
        getAlbums: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const json = response.json();
            return json;
        }
    }

    const loadAlbums = async () => {
        setLoading(true);
        const albums = await api.getAlbums();
        setList(albums);
        setLoading(false);
    }

    useEffect(()=>{
        loadAlbums();
    },[])

    return (
        <div>
            {loading && 
                <div>Carregando...</div>
            }

            {list.map((item, index)=>(
                <AlbumItem key={index} id={item.id} title={item.title}/>
            ))}
        </div>
    )
}