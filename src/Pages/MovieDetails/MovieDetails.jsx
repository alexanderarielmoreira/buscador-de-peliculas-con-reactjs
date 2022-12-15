import './MovieDetails.css' 
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { get } from '../../utils/httpClient';
import { Spinner } from '../../Spinner/Spinner';

export const MovieDetails = ()=> { 
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);  
    const [movie, setMovie] = useState(null); 

    useEffect(()=> {
        setIsLoading(true);

            get('/movie/' + movieId).then( 
                data => {
                    setMovie(data); 
                    setIsLoading(false);
                }
            )
        }, [movieId]
    );

    if(isLoading){
        return( <Spinner /> ); 
    } 

    const imageURL = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

    return(
        <div className='detailsContainer'> 
            <img className='columns movieImage' src={ imageURL } alt={movie.title} />

            <div className='itemsContainer'>
                <p><strong> Title: { movie.title } </strong></p>
                <p>
                    { movie.genres.map(
                        (genre) => genre.name).join(', ') }
                </p>
                <p> Description: {movie.overview } </p>
            </div>
        </div>
    ); 
};