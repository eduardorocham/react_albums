import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PhotoItem } from "../components/PhotoItem";
import { Album as AlbumType } from '../types/Album'
import { Photo } from "../types/Photo";
import { api } from "../api";

export const Album = () => {
    const [loading, setLoading] = useState(false);
    const [albumInfo, setAlbumInfo] = useState<AlbumType>({id: 0, title: '', userId: 0});
    const [list, setList] = useState<Photo[]>([]);

    const navigate = useNavigate();
    const params = useParams();

    const voltar = () => {
        navigate(-1);
    }

    useEffect(()=>{
        if(params.id) {
            loadPhotos(params.id);
            loadAlbumInfo(params.id);
        };
    }, [])

    const loadPhotos = async (id: string) => {
        setLoading(true);
        const photos = await api.getPhotosFromAlbum(id);
        setList(photos);
        setLoading(false)
    }

    const loadAlbumInfo = async (id: string) => {
        const albumInfo = await api.getAlbumInfo(id);
        setAlbumInfo(albumInfo);
    }

    return (
        <div>
            <button onClick={voltar}>Voltar</button>
            
            {loading &&
                <div>Carregando...</div>
            }

            <h1>{albumInfo.title}</h1>

            {list.map((item, index)=>(
                <PhotoItem key={index} data={item}/>
            ))}
        </div>
    )
}