import styles from './App.module.css' 
//Para agregar React-router;
import {
    BrowserRouter,  
    Routes, //importe 'Routes' en lugar de 'Switch' para que funcione;  
    Route, 
    Link
  } from "react-router-dom";
import { MovieDetails } from "./Pages/MovieDetails/MovieDetails";
import { LandingPage } from "./Pages/LandingPage/LandingPage"; 

export const App = ()=> {
    return (
        <BrowserRouter>
            <header>
                <Link to="/"> 
                    <h1 className={ styles.principalTitle }> Film Search Engine </h1> 
                </Link>  
            </header>
            <main>
                    <Routes> 
                        <Route path="/" element={ <LandingPage />} /> 
                        <Route exact path="/movies/:movieId" element={ <MovieDetails /> } /> 
                    </Routes> 
            </main>
        </BrowserRouter>
    )
};

