const Feedback = props => (
    <div className="d-flex justify-content-evenly m-2">
        {/* button[type=button].btn*2 */}
        <button
            type="button"
            className="btn btn-primary"
            onClick={props.funcaoOk}>
            {props.textoOK}
        </button>

        <button
            type="button"
            className="btn btn-danger"
            onClick={props.funcaoNOk}>
            {props.textoNOK}
        </button>
    </div>
)

export default Feedback