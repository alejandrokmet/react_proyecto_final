import { NavLink } from 'react-router-dom';
import carrito from '../../assets/carrito.png'

function CartWidget( { cantidadProductos }){           
    return(
        <div className="carritoNav"> 
            <NavLink to={"/carrito"}>
                <img src={carrito} style={{ width: '3rem', height:'2rem' }} alt='imagen en proceso'/>
                {cantidadProductos>0 ? <p id="contadorCarrito" className='text-white'>{cantidadProductos}</p> : <p></p>}
            </NavLink>
        </div>
    );
}

export default CartWidget;