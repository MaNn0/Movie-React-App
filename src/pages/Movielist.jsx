import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { instance } from "../apis/config";
import MovieCard from '../components/MovieCard';
import "../index.css";

export default function Movielist() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        instance
            .get()
            .then((res) => setMovies(res.data.results));
    }, [])
    console.log(movies);

    return (
        <Container className="con">
            <div className="d-flex flex-wrap justify-content-around">
                {movies?.map((film, key) => {
                    return <MovieCard key={key} film={film} />
                })
                }
            </div>
        </Container>
    )
}
