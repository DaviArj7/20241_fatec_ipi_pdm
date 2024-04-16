import ReactDOM from 'react-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

//componente definido via classe 
class App extends React.ComponenT{
    constructor(props){
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            estacao: null,
            data: null,
            icone: null
        }
    }

    obterEstacao = (data, latitude) => {
        const anoAtual = data.getFullYear()
        // 21/06
        const d1 = new Date(anoAtual, 5, 21)
        // 24/09
        const d2 = new Date(anoAtual, 8, 24)
        // 22/12
        const d3 = new Date(anoAtual, 11, 22)
        // 21/03
        const d4 = new Date(anoAtual, 2, 21)

        // operador ternário
        const estouNoSul = latitude < 0 ? true : false
        if (data >= d1 && data < d2)
            return estouNoSul ? 'Inverno' : 'Verão'
        if (data >= d2 && data < d3)
            return estouNoSul ? 'Primavera' : 'Outono'
        if (data >= d3 && data < d4)
            return estouNoSul ? 'Verão' : 'Inverno'
        return estouNoSul ? 'Outono' : 'Primavera'
    }

    icones = {
        'Primavera': 'fa-seedling',
        'Verão': 'fa-sun',
        'Outono': 'fa-canadian-maple-leaf',
        'Inverno': 'fa-snowflake'
    }

    render(){
        return(
            <div>Meu app</div>
        )
    }
}

// export default function App(){
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position)
//     )
//     return (
//         <div>
//             Meu app
//         </div>
//     )
// }

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)