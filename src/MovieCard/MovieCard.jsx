import { Link } from 'react-router-dom';
import './MovieCard.css'; 

export  const MovieCard = ( { movie } )=> {
    const imagenURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path ; 

    return (
        <li className="movieCard" >
        <Link to={ "/movies/" + movie.id }>   
            <img 
                width={ 230 } 
                height={ 345 }
                src={ imagenURL } 
                alt={ movie.title } 
                className="movieImage" 
                />
            <div className='styles-titulos'> { movie.title } </div>   
        </Link>
        </li>
    );
};  