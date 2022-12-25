import { Buscador } from "../../Buscador/Buscador";
import { MoviesGrid } from "../../MoviesGrid/MoviesGrid";
import { useQuery } from "../../hooks/useQuery"; 
import { useDebounce } from "../../hooks/UseDebounce";

export const LandingPage = ()=> {
    const query = useQuery(); 
    const search = query.get("search");

    const debouncedSearch = useDebounce(search, 300); 
    return(
        <div>
            <Buscador />
            <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
        </div>
    ); 
};

