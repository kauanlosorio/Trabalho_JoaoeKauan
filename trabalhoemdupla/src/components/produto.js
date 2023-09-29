import './produto.css';
function Produto(props) {
    return(
        <div className="titulo">
            <h2>{props.titulo}</h2>
            <h4>{props.preco}</h4>
            <p>{props.desc}</p>
            <p className="categoria">{props.categoria}</p>
        </div>
        
    )
}

export default Produto