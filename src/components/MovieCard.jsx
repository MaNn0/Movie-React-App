import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { addToWatchlist, removeFromWatchlist } from '../components/store/slices/AddMovie';
import { useDispatch, useSelector } from 'react-redux';
import "../index.css";

export default function MovieCard(props) {
    const dispatch = useDispatch(); // Use `useDispatch` to dispatch actions
    const love = useSelector((state) => state.love.items);

    const handleHeartClick = () => {
        if (love.find((m) => m.id === props.film.id)) {
            dispatch(removeFromWatchlist(props.film.id));
        } else {
            dispatch(addToWatchlist(props.film));
        }
    };

    return (
        <Card id="example2" className="cardHov" style={{ width: '18rem', marginBottom: '30px' }}>
            <Link to={`/MovieDetails/${props.film.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="image-container ">
                    <Card.Img
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500${props.film.poster_path}`}
                        alt={props.film.title || 'Movie Poster'}
                        className="image-hover"
                    />
                </div>
            </Link>
            <Card.Body>
                <Card.Title>{props.film.title}</Card.Title>
                <span className="d-flex justify-content-between text-center">Rating: {props.film.vote_average}/10
                    <FontAwesomeIcon
                        className='fs-3 '
                        icon={love.find((m) => m.id === props.film.id) ? faSolidHeart : faRegularHeart}
                        style={{ color: love.find((m) => m.id === props.film.id) ? "#e01b24" : "gray", cursor: 'pointer' }}
                        onClick={handleHeartClick}
                    /></span>

            </Card.Body>
        </Card>
    );
}
