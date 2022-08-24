import './style.css';
import { Photo } from "../../types/Photo";
import { Link } from 'react-router-dom';

type Props = {
    data: Photo;
}
export const PhotoItem = ({data}: Props) => {
    return (
        <Link to={`photos/${data.id}`} className="photo">
            <img src={data.thumbnailUrl} alt={data.title} />
        </Link>
    )
}