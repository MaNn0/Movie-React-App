import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router';
import "../index.css";
export default function MovieCard(props) {

    return (
        <>
            <Link to={`/MovieDetails/${props.film.id}`} >
                <Card id='example2' style={{ width: '18rem', marginBottom: '30px' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.film.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{props.film.title}
                        </Card.Title>
                        <span className='text-center'>Rating: {props.film.vote_average}/10</span>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}