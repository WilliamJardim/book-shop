import Dialog from '../Dialog/Dialog';
import styles from './BookInfo.module.css';

function BookInfo(props){
    const { isVisivel, bookId, Book }                             = props; //Valores
    const { nome, autor, descricaoBreve, descricaoLonga, capa  }  = Book || {};
    const { closeBook, buyBook }                                  = props; //Funcoes

    //Renderização condicional
    return (
      //Se isVisivel for true, desenha o componente
      <div>

        {isVisivel == true && (

          <div className={styles.BookInfo}>
            <img src={capa} alt={nome}></img>
            <h1> {nome} </h1>
            <p> {descricaoBreve} </p>

            <textarea readOnly value={descricaoLonga}></textarea>

            <br />

            <button className={styles.btnBuy} onClick={buyBook}> $ Buy </button>
            <button className={styles.btnClose} onClick={closeBook}> X Close </button>
          </div> 

        )}

      </div>
    )
}

export default BookInfo;