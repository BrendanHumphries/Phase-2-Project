import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div id="links">
            <NavLink exact to='/' className="navBarLink">Home</NavLink>
            <NavLink exact to='/meals' className="navBarLink">Meals</NavLink>
            <NavLink exact to='/cart' className="navBarLink">Cart</NavLink>
            <NavLink exact to='/form' className="navBarLink">Form</NavLink>
        </div>
    )
}

export default NavBar;