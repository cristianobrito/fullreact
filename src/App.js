import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="container-fluid" >
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark justify-content-center col-12">
            <a className="navbar-brand col-12" href="#">
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
    <div className="container-fluid" >
        <h3 className="text-dark">Seja bem vindo(a)!</h3>
        <p className="text-danger">Aqui em nossa loja,programadores tem desconto nos produtos para sua casa!.</p>
    </div>
    <br /><br /><br /><br />
    <br /><br /><br /><br />
    <br /><br />
    <div className="container-sm text-center">
        <p className="text-danger" id="formas_pagamento"><b>Formas de pagamento</b></p>
        <img src="./img/logo_pagamento.jpg" style={{width:'50%'}}/>
        <p className="text-danger">&copy; Recod Pro</p>
    </div>
    </div>
  );
}
export default App;
