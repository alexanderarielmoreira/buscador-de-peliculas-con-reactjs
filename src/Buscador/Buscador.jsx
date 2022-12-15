import './Buscador.css'; 
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react'; 
import { useNavigate } from "react-router-dom";  
import { useSearchParams } from 'react-router-dom'; 

export const Buscador = ()=> {
    const [query, setQuery] = useSearchParams(); 
    const search = query.get("search");

    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate(); 

    useEffect(() => {
        setSearchText(search || ''); 
    }, [search]); 
    
    const handleSubmit = (event)=> {
        event.preventDefault(); 
        navigate("/?search=" + searchText); 
    }

    return (
        <form className='searchContainer' onSubmit={handleSubmit}>
            <div className='searchBox'> 
                <input className='searchInput' type="text" value={searchText} onChange={ (event)=> setSearchText(event.target.value.toUpperCase()) } /> 
                <button className='searchButton' type="submit"> 
                    <FaSearch size={20} /> 
                </button>
            </div>

        </form>
    )

};