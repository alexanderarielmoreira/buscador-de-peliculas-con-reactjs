import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesGrid.css'; 
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import { get } from '../utils/httpClient';
import { Spinner } from '../Spinner/Spinner';
import { useQuery } from '../hooks/useQuery';   

export const MoviesGrid = ()=> { 

    const [movies, setMovies] =  useState([]); 
    const [isLoading, setIsLoading] = useState(true); 

    const query = useQuery();
    const search = query.get("search");

    const location = useLocation();
    console.log(location);  
    
    useEffect(() => {
        setIsLoading(true); 
        const searchURL = search ? "/search/movie?query=" + search 
        : "/discover/movie"; 
        get(searchURL).then((data) => {
          setMovies(data.results);
          setIsLoading(false); 
        });
      }, [search]);  

    if(isLoading){
        return <Spinner />
    }

    return (
        <ul className='styleMovieGrid'>
            { movies.map(
                ( movie ) => {
                    return(
                        <MovieCard key={ movie.id } movie={ movie } /> 
                    )
                }
            ) }

        </ul>
    );
};

