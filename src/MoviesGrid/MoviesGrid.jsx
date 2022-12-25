import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesGrid.css'; 
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import { get } from '../utils/httpClient';
import { Spinner } from '../Spinner/Spinner';   
import InfiniteScroll from 'react-infinite-scroll-component';  
import { Empty } from '../Empty/Empty';

export const MoviesGrid = ({ search })=> { 

    const [movies, setMovies] =  useState([]); 
    const [isLoading, setIsLoading] = useState(true); 
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true); 

    const location = useLocation();
    console.log(location);  
    
    useEffect(() => { 
        setIsLoading(true); 
        const searchURL = search ? "/search/movie?query=" + search + '&page=' + page
        : "/discover/movie?page=" + page;  
        get(searchURL).then((data) => {
          setMovies(prevMovies => prevMovies.concat(data.results)); 
          setHasMore(data.page < data.total_pages);
          setIsLoading(false); 
        });
      }, [search, page]);  

    if(!isLoading &&  movies.length === 0){
        return <Empty />; 
    }

    return (
        <InfiniteScroll
            dataLength={movies.length} 
            hasMore={hasMore}
            next={()=> setPage((prevPage) => prevPage + 1 )} 
            loader={<Spinner />}
            >
        <ul className='styleMovieGrid'>
            { movies.map(
                ( movie ) => {
                    return(
                        <MovieCard key={movie.id} movie={movie} /> 
                    )
                }
            ) }
        </ul>
        </InfiniteScroll> 
    );
};

