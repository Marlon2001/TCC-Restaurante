import React, { Fragment } from 'react';
import Seta from '../../../recursos/icons/seta-laranja.png';
import { Link } from 'react-router-dom';
import Logo from '../../../recursos/imgs/img-login.png';
import { Label } from '../../globais/label/Label'
import { MdArrowDropDown } from "react-icons/md";
import Pizza from '../../../recursos/imgs/pizza.jpg'
import { ImgRestaurante } from './styled';

export const CabecalhoPaginaRestaurante = (props) => (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <a className="navbar-brand" href="#">
    //         <img src={Logo} style={{ maxWidth: 180 + 'px' }} />
    //     </a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav mr-auto">
    //             <li className="nav-item dropdown">
    //                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                     Opções
    //                 </a>
    //                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                     <a className="dropdown-item" href="#">Seus Pedidos</a>
    //                     <a className="dropdown-item" href="#">Cadastrar Produto</a>
    //                 </div>
    //             </li>
    //         </ul>

    //     </div>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <a className="navbar-brand" href="#">
            <img src={Logo} style={{ maxWidth: 180 + 'px' }} />
        </a>

        <div className="row align-items-center ml-auto p-2 bg-light ">
            <div className="nav-item col col-sm col-md col-lg-2">
                <a className="nav-link text-secondary" href="#">Pedidos</a>
            </div>
            <div className="nav-item col col-sm col-md col-lg-6">
                <a className="nav-link text-secondary" href="#">Cadastrar Produto</a>
            </div>

            <a className="navbar-brand col col-sm col-md col-lg-3" href="#">
                <img className="border rounded-circle" src={Pizza} style={{ width: 65 + 'px', height: 60 + 'px' }} />
            </a>
        </div>


    </nav>
);