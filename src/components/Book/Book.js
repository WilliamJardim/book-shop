import './Book.css';

function Book(props){
    const {
        id,
        nome,
        autor,
        descricaoBreve,
        paginas,
        genero,
        assunto,
        ano,
        capa,

        //Funcao
        openBook

    } = props;

    const buttonClick = function(id){
        openBook(id, props);
    }

    return (
        <div className="Book">
            <img src={capa} alt={nome}></img>
            <h2>{nome}</h2>
            <p> {descricaoBreve} </p>

            <button className="btn-info"
                    onClick={ () => buttonClick(id) }
            >
                View this book
            </button>
        </div>
    )
}

export default Book;