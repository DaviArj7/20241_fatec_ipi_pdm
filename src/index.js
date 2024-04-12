import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
    return(
        <div className="container border rounded mt-2">
           
            <div className="row">
                <div className="col-12">
                    <h1 className="display-5 text-center">Seus pedidos</h1>
                </div>
            </div>

        <div className="row">

            <div className="col-sm-12 col-lg-4">
               <div className="card">
                <div className="card-header text-muted">
                    20/04/2023
                </div>
                <div className="card-body d-flex">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-house fa-2x"></i>
                    </div>
                    <div className="flex-grow-1 ms-2 border p-2">
                        <h4 className="text-center">Livro</h4>
                        <p className="text-center">Concrete Mathematics - Donald Knuth</p>
                    </div>
                </div>

               </div>
            </div>

            <div className="col-sm-12 col-lg-4">
             <div className="card">
                <div className="card-header text-muted">
                    21/04/2023
                </div>
                <div className="card-body d-flex">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-laptop fa-2x"></i>
                    </div>
                    <div className="flex-grow-1 ms-2 border p-2">
                        <h4 className="text-center">Notebook</h4>
                        <p className="text-center">i7 - 16GB</p>
                    </div>
                </div>
               </div>   
            </div>

            <div className="col-sm-12 col-lg-4">
                 <div className="card">
                <div className="card-header text-muted">
                    22/04/2023
                </div>
                <div className="card-body d-flex">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-memory fa-2x"></i>
                    </div>
                    <div className="flex-grow-1 ms-2 border p-2">
                        <h4 className="text-center">SSD</h4>
                        <p className="text-center">256GB</p>
                    </div>
                </div>
               </div>   
            </div>

        </div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)

