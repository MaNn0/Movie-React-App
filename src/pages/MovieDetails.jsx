import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "../index.css";
import { useParams } from "react-router";
import axios from "axios";
export default function MovieDetails() {
    const [movie, setMovie] = useState('');
    const { id } = useParams();
    // console.log(id);
    async function getMovie() {
        const response =
            await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7f74ffb2996003663e3879edf6de0988`)
        setMovie(response.data)
    }
    useEffect(() => {
        getMovie();
    }, [id])
    return (
        <Container className="con">
            {movie &&
                <div className="d-flex justify-content-between">
                    <div className="">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></div>
                    <div className=" text-content justify-content-center align-content-center w-50">
                        <h2>{movie.original_title}</h2>
                        <p>{movie.overview}</p>
                    </div>

                </div>
            }
        </Container>
    );
}
