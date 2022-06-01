import React from "react";
import './App.css'

import { useState, useEffect } from 'react';
import SearchIcon from './search.svg';

// 866701da
import MovieCard from './MovieCard';

const API_URL = "http://omdbapi.com?apikey=866701da";




const App = ()=> {

    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTeam]=useState('');


    const searchMovies = async (title)=>{
        const response= await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Superman')

    },[]);




    return(
        <>
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
            <input 
            placeholder="Search Your favorite movies"
            value={searchTerm}
            onChange={(e)=>setSearchTeam(e.target.value)}
            />
            <img
            src={SearchIcon}
            alt="search"
            onClick={()=>{
                searchMovies(searchTerm)
            }}
            />
            </div>
            {
                movies?.length > 0
                ?(
                    <div className="container">
                        {movies.map((movie)=>{
                            return <MovieCard movie={movie}/>
                        })}
                    </div>

                ):
                (
                    <div className="empty">
                    <h2>No movies found</h2>    
                        
                        
                    </div>

                ) 



            }

        </div>
        </>
    );

}

export default App;