import CartWidget from './CartWidget';
import { NavLink} from 'react-router-dom';
import { useContexto } from '../Context/CartContext';
import background from '../NavBar/logo_header.png';

function Navbar({links}){  
    const {cantidadProductos} = useContexto();
    return(
        <header className="head" style={{ backgroundImage: `url(${background})` }}>
            <div>
                            
            </div>
            <div className="titulo">
                <nav>
                    <ul>{links.map( (e, i) =><li key={i}><NavLink to={e.href}>{e.name} </NavLink></li> )}    
                    </ul>                       
                </nav>
                <CartWidget cantidadProductos={cantidadProductos}/>
            </div>
        </header>
    );
}

export default Navbar;