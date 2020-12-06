import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
function Contato() {
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
    <div className="container-fluid">
        <h3>Contato</h3>
    </div>
    <hr />
    <div className="container-fluid col-6">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-sm  text-center navbar-dark justify-content-center col-12">
                <a className="navbar-brand col-8 text-danger" href="#">
                    <img src="./img/logoemail.png" alt="logo" style={{width:'100px'}} />
                    <br />
                    contato@fullstackeletro.com
                </a>
                <a className="navbar-brand col-8 text-danger" href="#">
                    <img src="./img/whatsapp.png" alt="logo" style={{width:'100px'}} />
                    <br />
                    (11) 99999-9999
                </a>
            </nav>
        </div>
        <div>
            <form method="POST" action="/action_page.php">
                <div className="form-group text-left">
                    <label for="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="digite seu e-mail" name="email"/>
                </div>
                <div className="form-group text-left">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="digite sua senha" name="pswd"/>
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        <br />
        <div className="container-sm text-center">
            <p className="text-danger" id="formas_pagamento"><b>Formas de pagamento</b></p>
            <img src="./img/logo_pagamento.jpg" style={{width:'50%'}} />
            <p className="text-danger">&copy; Recod Pro</p>
        </div>   
    </div>
    </div>
 
  );
}

export default Contato;
