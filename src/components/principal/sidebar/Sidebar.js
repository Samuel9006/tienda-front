import React from 'react';

function Sidebar({isVisible}) {
    return (
        <div className={`sidebar ${isVisible ? 'open' : 'hidden'}`} id="sidebar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Pedidos</a></li>
                <li><a href="#">Cuentas</a></li>
                <li><a href="#">Transacciones</a></li>
                <li><a href="#">Detalles de la cuenta</a></li>
                <li className="dropdown">
                    <a href="#" className="dropbtn">Soporte</a>
                    <div className="dropdown-content">
                        <a href="#">FAQ</a>
                        <a href="#">Contactar</a>
                    </div>
                </li>
                <li><a href="#">Cerrar sesión</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;
