import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//5b53fdfd

const currentList = [{
    "Title": "Engenharia Eletrotécnica e de Computadores",
    "Year": "14.5",
    "Type": "IST",
    "Poster": "https://tecnico.ulisboa.pt/files/2022/03/jeec-22-jornadas-de-engenharia-eletrotecnica-e-de-computadores-750x422.jpg",
    "Desc": "Descrição Engenharia Eletrotécnica e de Computadores"
  }, {
    "Title": "Engenharia Civil",
    "Year": "15.2",
    "Type": "IST",
    "Poster": "http://1.bp.blogspot.com/-mlIYqXvG-5s/U_zbUbXLHvI/AAAAAAAAANk/7VMLUszr_bE/s1600/engenharia-civil-obras.jpg",
    "Desc": "Descrição Engenharia Civil"
  }, {
    "Title": "Medicina",
    "Year": "16.7",
    "Type": "UL",
    "Poster": "https://i.pinimg.com/474x/dd/67/a6/dd67a68a39a2cd8223ac1c328e7d030e.jpg",
    "Desc" : "Descrição Medicina"
  }, {
    "Title": "Gestão",
    "Year": "18.8",
    "Type": "Nova SBE",
    "Poster": "http://ceumaonline.com.br/nead/wp-content/uploads/2018/01/gestao-publica-2.jpg",
    "Desc" : "Descrição Gestão Nova"
  }, {
    "Title": "Gestão",
    "Year": "13.2",
    "Type": "Católica",
    "Poster": "https://blog.ipog.edu.br/wp-content/uploads/2017/04/shutterstock_558833797.jpg",
    "Desc" : "Descrição Gestão Católica"
  }];

const getCourse = (title) => {
    const returnArr = [];
    for (let i = 0; i < currentList.length; i++) {
        if(currentList[i].Title.includes(title) || currentList[i].Type.includes(title)) returnArr.push(currentList[i]);
    }
    console.log(returnArr);
    return returnArr;
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const [clickedFlag, setClickedFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});

    const searchMovies = (title) => {
        setClickedFlag(false);
        const response = getCourse(title);
        const data = response;

        setMovies(data);
        console.log(data);
    }

    useEffect(() => {
        searchMovies('Engenharia')

    }, []);

    const cardClicked = (movie) => {
        console.log(movie);
        setClickedFlag(true);
        setClickedMovie(movie);
        setMovies([]);
    };

    return (
        <div className="app">
            <h1>SJ</h1>
            <div class="topnav">
                <a class="active" href="#home">Cursos</a>
                <a href="#news">Média</a>
                <a href="#contact">Contactos</a>
                <a href="#about">Perfil</a>
            </div>

            <div className="search">
                <input 
                    placeholder="Procurar cursos"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                ></img>
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <div className="movie" onClick={() => cardClicked(movie)}>
                            <div>
                                <p>{movie.Year}</p>
                            </div>
                            <div>
                                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.placeholder.com/400'} alt={movie.Title}/>
                            </div>
                            <div>
                                <span>{movie.Type}</span>
                                <h3>{movie.Title}</h3>
                            </div>
                        </div>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>{clickedFlag ? clickedMovie.Desc : 'Sem cursos'}</h2>
                    </div>
                )
                
            }
        </div>
    );
}

export default App;