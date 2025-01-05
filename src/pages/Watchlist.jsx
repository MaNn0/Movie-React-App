import React from 'react'
import Container from 'react-bootstrap/Container';
import "../index.css";
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
export default function Watchlist() {
    const love = useSelector((state) => state.love.items);
    console.log(love);


    return (
        <Container className='con'>
            <div style={{ transition: 'transform 0.2s' }} className="d-flex flex-wrap justify-content-around">
                {love.map(el => {
                    return <MovieCard key={el.id} film={el} />
                }
                )}
            </div>
        </Container >
    )
}
