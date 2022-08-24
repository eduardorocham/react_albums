import { useState, useEffect } from "react";
import { Photo as photoType } from "../types/Photo";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";

export const Photo = () => {
    const [loading, setLoading] = useState(false);
    const [photoInfo, setPhotoInfo] = useState<photoType>()

    const navigate = useNavigate();

    const handdleButton = () => {
        navigate(-1);
    }

    const loadPhoto = async (id: string) => {
        setLoading(true);
        const photo = await api.getPhoto(id);
        setPhotoInfo(photo);
        setLoading(false);
    }

    const params = useParams();

    useEffect(()=>{
        if (params.id) {
            loadPhoto(params.id);
        }
    }, [])

    return (
        <div>
            {loading && 
                <div>Carregando...</div>
            }

            {photoInfo &&
                <div>
                    <button onClick={handdleButton}>Voltar</button>
                    <p>{photoInfo.title}</p>
                    <img src={photoInfo.url} alt={photoInfo.title} />
                </div>
            }
        </div>
    )
}