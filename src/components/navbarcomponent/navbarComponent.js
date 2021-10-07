import 'bootstrap/dist/css/bootstrap.min.css';
import './navbarComponent.css';
import { Navbar, Container, Nav, Form, FormControl, Button, Row, Col } from 'react-bootstrap';

const NavbarComponent = (props) => {
    return (
        <header>
            <img
                className="logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />


            <div className="input-group" id="buscador">
                <input type="text" className="form-control" name="x" placeholder="Search" />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button" id="searchbtn" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </span>
            </div>


            <div id="spacer"></div>


            <nav>
                <div className="options">
                    <span className="option_upper">Hola,Identificate</span>
                    <span className="option_lower">Cuentas y listas <i className="fab fa-caret-down"></i></span>
                </div>
                <div className="options">
                    <span className="option_upper">Devoluciones</span>
                    <span className="option_lower">y Pedidos</span>
                </div>
                <div className="options">
                    <span className="option_upper">Try</span>
                    <span className="option_lower">Cesta <i className="fab fa-caret-down"></i></span>
                </div>
            </nav>
        </header>
    );
}
export default NavbarComponent;