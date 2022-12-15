import './Spinner.css'
import { FaSpinner } from 'react-icons/fa';


export const Spinner = ()=> {
    return( 
        <div className='spinner spinning'> 
            <FaSpinner size={70}/>
        </div>
    );

}; 