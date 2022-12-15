import { Buscador } from "../../Buscador/Buscador";
import { MoviesGrid } from "../../MoviesGrid/MoviesGrid";

export const LandingPage = ()=> {
    return(
        <div>
            <Buscador />
            <MoviesGrid />
        </div>
    ); 
};

