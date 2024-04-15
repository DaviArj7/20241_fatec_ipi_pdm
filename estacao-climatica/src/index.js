import ReactDOM from 'react-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

//componente definido via classe 
class App extends React.ComponenT{
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