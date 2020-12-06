import './App.css';
import { Link } from 'react-router-dom';
function Lojas() {
  return (
    <div className="App">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark justify-content-center col-12">
            <a className="navbar-brand col-12" href="/">
                <img src="./img/logo_fullstackeletro2.gif" alt="logo" style={{width:'100px'}} />
            </a>
            <ul className="navbar-nav navbar-brand col-10">
                <li className="nav-item navbar-brand col-2">
                    <a className="nav-link text-white" href="Produtos">Produtos</a>
                </li>
                <li className="nav-item navbar-brand col-2">
                    <a className="nav-link text-white" href="Lojas">Nossas Lojas</a>
                </li>
                <li className="nav-item navbar-brand col-2">
                    <a className="nav-link text-white" href="Contato">Contato</a>
                </li>
            </ul>
        </nav>
    </div>

    <div className="container col-12 m-4 ">
      <div className="container row-1">
      <h2>Nossas lojas</h2>
      <div className="container row">
      <ul className="list-group col-sm-4">
        <li className="list-group-item active bg-danger border">Rio de Janeiro</li>
        <li className="list-group-item">Av. Presidente Vargas, 500</li>
        <li className="list-group-item">10 &ordm; andar, Centro</li>
        <li className="list-group-item">tel: (21) 3333 - 3333</li>
      </ul> 
      <ul className="list-group col-sm-4">
        <li className="list-group-item active bg-danger border">São Paulo</li>
        <li className="list-group-item">Av. Paulista, 985</li>
        <li className="list-group-item"> 3&ordm; andar, Jardins</li>
        <li className="list-group-item">tel: (11) 4444 - 4444</li>
      </ul>
      <ul className="list-group col-sm-4">
        <li className="list-group-item active bg-danger border">Santa Catarina</li>
        <li className="list-group-item">Rua Major vila, 370</li>
        <li className="list-group-item">Vila Mariana</li>
        <li className="list-group-item">tel: (47) 5555 - 5555/li</li>
      </ul>
         </div>
      </div>
    </div>
<br />

    <div className="container-sm text-center">
            <p className="text-danger" id="formas_pagamento"><b>Formas de pagamento</b></p>
            <img src="./img/logo_pagamento.jpg" style={{width:'50%'}} />
            <p className="text-danger">&copy; Recod Pro</p>
        </div>  
    </div>
  );
}

export default Lojas;
