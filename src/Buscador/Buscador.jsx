import './Buscador.css'; 
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";  
import { useSearchParams } from 'react-router-dom'; 

export const Buscador = ()=> {
    const [query, setQuery] = useSearchParams(); 
    const search = query.get("search");

    const navigate = useNavigate();  
    
    const handleSubmit = (event)=> {
        event.preventDefault(); 
    }

    return (
        <form className='searchContainer' onSubmit={handleSubmit}>
            <div className='searchBox'> 
                <input 
                    className='searchInput' 
                    type='text' 
                    value={search} 
                    placeholder= 'Title'
                    aria-label='Search Movies' 
                    onChange={(event)=> {
                        const value = event.target.value.toUpperCase();
                        navigate("/?search=" + value);
                        }
                    } 
                /> 
                <button className='searchButton' type="submit"> 
                    <FaSearch size={20} /> 
                </button>
            </div>

        </form>
    )

};