import './BookInfo.css';
import Dialog from '../Dialog/Dialog';

function BookInfo(props){
    const { isVisivel, bookId, Book }                       = props; //Valores
    const { nome, autor, descricaoBreve, descricaoLonga  }  = Book || {};
    const { closeBook }                                     = props; //Funcoes

    //Renderização condicional
    return (
      //Se isVisivel for true, desenha o componente
      <div>

        {isVisivel == true && (

          <div class='BookInfo'>
            <h1> {nome} </h1>
            <p> {descricaoLonga} </p>
            <button onClick={closeBook}> Close </button>
          </div> 

        )}

      </div>
    )
}

export default BookInfo;