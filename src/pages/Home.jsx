import React, { useEffect, useState } from 'react'
import { Filter, Card } from "../components"
import "./pages.css"

const Home = () => {

    const [movies, setMovies] = useState([])
    const [searchmovies, setSearchMovies] = useState('')

    useEffect(() => {
        fetch('https://adaorachi.github.io/esetech-assessment-api/game-data.json', { method: 'GET',
        dataType: 'json' }).then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setMovies(data))
    },[])

    const formChange = (inputval) => {
        setSearchMovies(inputval)
        console.log(searchmovies)
    }

    const handleFormSubmit = () => {
        setSearchMovies('')
    }

    let filteredMovies = movies.filter(movie => {
        return movie.name.toLowerCase().includes(searchmovies.toLowerCase())
    })
    return (
        <div className='e__home'>
            <div className='filter'>
                <Filter searchinput={searchmovies} onFormChange={formChange} formSubmit={handleFormSubmit} />
            </div>
            <div className='card'>
                <Card movies={filteredMovies} />
            </div>
        </div>
    )
}

export default Home