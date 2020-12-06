import './App2.css';
import { Link } from 'react-router-dom';
function Produtos() {
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
    <div className="container-fluid" >
        <h3>Produtos</h3>
    </div>
 <div className="categorias container-fluid col-12"/>
        <div className="row">
            <div className="col-2 text-left"> 
                <div className="categorias border" style={{height:'200px'}}>
                    <h3 >Categorias</h3>
                    <ul className="navbar-nav navbar-brand col-">
                        <li onclick="exibir_todos()" className="g1">Todos (8)</li>
                        <li onclick="exibir_categoria('geladeira')" className="g1">Geladeiras (2)</li>
                        <li onclick="exibir_categoria('fogao')" className="f1">Fogões (2)</li>
                        <li onclick="exibir_categoria('microondas')" className="m1">Microondas(2)</li>
                        <li onclick="exibir_categoria('lavaroupa')" className="lr1">Lava roupas(2)</li>
                    </ul>   
                </div>
            </div>
           
         <div className="box_produto container col-8">
        <div className="row text-center ">
            <div className="box_produto col" id="geladeira">
                <img src="./img/geladeira1.jpg" style={{width:'150px'}} onclick="destaque(this)"/>
                <p className="descricao">Geladeira Brastemp </p>
                <hr />
                <p className="descricao">De:<s>R$ 6.389,00</s></p>
                <p className="desconto"> <b className="precoDesconto text-danger"><i>Por:</i>R$ 5.019,00</b><br /></p>
            </div>
            <div className="box_produto col" id="fogao"> 
                <img src="./img/fogao1.png" style={{width:'150px'}} onclick="destaque(this)" />               
                <p className="descricao">Fogão 5 Bocas Preto Atlas</p>
                <hr />
                <p className="descricao">De:<s>R$ 2.189,00</s></p>
                <p className="desconto"><b className="precoDesconto text-danger"><i>Por:</i>R$ 1.998,00</b><br /></p>
            </div>
            <div className="box_produto col" id="microondas">
                <img src="./img/microondas1.jpg" style={{width:'150px'}} onclick="destaque(this)" />
                <p className="descricao">Microondas Panasonic</p>
                <hr />
                <p className="descricao">De:<s>R$ 1.099,00</s></p>
                <p className="desconto"><b className="precoDesconto text-danger"><i>Por:</i>R$ 759,00</b><br /></p>
            </div>
            <div className="box_produto col" id="lavaroupa">
                <img src="./img/maquinadelavar1.jpg" style={{width:'150px'}} onclick="destaque(this)" />
                <p className="descricao">Lavadora Brastemp </p>
                <hr />
                <p className="descricao">De:<s>R$ 2.799,00</s></p>
                <p className="desconto"><b className="precoDesconto text-danger"><i>Por:</i>R$ 2.459,00</b><br /></p>
            </div>
           <div className="box_produto text-center col" id="geladeira">
                <img src="./img/geladeira2.jpg" style={{width:'150px'}} onclick="destaque(this)" />
                <p className="descricao">Geladeira Brastemp</p>
                 <hr />
                <p className="descricao">De:<s>R$ 6.389,00</s></p>
                <p className="desconto"><b className="precoDesconto text-danger"><i>Por:</i>R$ 5.019,00</b><br /></p>
           </div>
           <div className="box_produto col" id="fogao">
            <img src="./img/fogao2.jpg" style={{width:'150px'}} onclick="destaque(this)" />
            <p className="descricao">Fogão 5 Bocas Preto Atlas</p>
            <hr />
            <p className="descricao">De:<s>R$ 2.189,00</s></p>
            <p className="desconto"><b className="precoDesconto text-danger"><i>Por:</i>R$ 1.998,00</b><br /></p>
        </div>
        <div className="box_produto col" id="microondas">
            <img src="./img/microondas2.jpg" style={{width:'150px'}} onclick="destaque(this)" />
                <p className="descricao">Microondas Panasonic</p>
                <hr />
                <p className="descricao">De:<s>R$ 1.099,00</s></p>
                <p className="desconto"><b className="precoDesconto text-danger"><i>Por:</i>R$ 759,00</b><br /></p>
        </div>
        <div className="box_produto col" id="lavaroupa">
            <img src="./img/lavaroupas3.png" style={{width:'150px'}} onclick="destaque(this)" />
                <p className="descricao">Lavadora Brastemp 20 L</p>
                <hr />
                <p className="descricao">De:<s>R$ 2.799,00</s></p>
                <p className="desconto"><b className="precoDesconto text-danger"><i>Por:</i>R$ 2.459,00</b><br /></p>
        </div>
    

    <div className="container-sm text-center">
            <p className="text-danger" id="formas_pagamento"><b>Formas de pagamento</b></p>
            <img src="./img/logo_pagamento.jpg" style={{width:'50%'}} />
            <p className="text-danger">&copy; Recod Pro</p>
        </div>  
</div>
</div>
</div>
</div>
  );
}
export default Produtos;