import styles from './Book.module.css';

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
        <div className={styles.Book}>
            <img src={capa} alt={nome}></img>
            <h2>{nome}</h2>
            <p> {descricaoBreve} </p>

            <button className='btnInfo'
                    onClick={ () => buttonClick(id) }
            >
                View this book
            </button>
        </div>
    )
}

export default Book;