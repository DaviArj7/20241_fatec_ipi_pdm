import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'

const App = () => {

    const textoOK = "Já chegou"
    const textoNOK = "Ainda não chegou"
    const funcaoOK = () => alert ("Agradecemos a confrimação")
    const funcaoNOK = () => alert ("Verificamos o ocorrido")
    const componenteFeedback = (
        <Feedback
            textoOK={textoOK}
            textoNOK={textoNOK}
            funcaoOK={funcaoOK}
            funcaoNOK={funcaoNOK}
        />
    )

    return(
        <div className="container border rounded mt-2">
           
            <div className="row">
                <div className="col-12">
                    <h1 className="display-5 text-center">Seus pedidos</h1>
                </div>
            </div>


        <div className="row">

            <div className="col-sm-12 col-lg-4">
                <Cartao cabecalho="21/04/2024">
                 <Pedido
                    icone="fa-solid fa-hdd fa-2x"
                    titulo="SSD"
                    descricao="SSD A400 256GB"  />
                    {componenteFeedback}
                </Cartao>
            </div>

            <div className="col-sm-12 col-lg-4">
                <Cartao cabecalho="22/04/2024">
                 <Pedido
                    icone="fa-solid fa-book fa-2x"
                    titulo="Livro"
                    descricao="Concrete Mathematics - Donald Knuth"/>
                  {componenteFeedback}
                </Cartao>
            </div>


            <div className="col-sm-12 col-lg-4">
                <Cartao cabecalho="23/04/2024">
                 <Pedido
                    icone="fa-solid fa-laptop fa-2x"
                    titulo="Notebook"
                    descricao="Notebook 8GB i7"/>
                    {componenteFeedback}
                </Cartao>
            </div>

        </div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)

