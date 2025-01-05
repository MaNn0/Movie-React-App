import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { instance } from "../apis/config";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MovieCard from '../components/MovieCard';
import "../index.css";

export default function Movielist() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([])

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.movieName.value

        if (searchValue === '') {
            setSelectedMovie(movies)
        } else {
            const filterredArr = movies.filter(el =>
                el.original_title.toLowerCase().includes(searchValue.toLowerCase())
            )
            setSelectedMovie(filterredArr)
        }
    }
    useEffect(() => {
        instance
            .get()
            .then((res) => {
                setMovies(res.data.results)
                setSelectedMovie(res.data.results)
            });
    }, [])

    return (
        <Container className="con">
            <Form onSubmit={handleSearch} className="d-flex mb-4">
                <Form.Control
                    id="movieName"
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2 h-100"
                />
                <Button type="submit">Submit</Button>
            </Form>
            <div style={{ transition: 'transform 0.2s' }} className="d-flex flex-wrap justify-content-around">
                {selectedMovie?.map((film, key) => {
                    return <MovieCard key={key} film={film} />
                })
                }
            </div>
        </Container>
    )
}
// controlled component vs uncontrolled component
// <Switch>