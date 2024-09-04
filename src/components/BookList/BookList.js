import React from 'react';
import { useState } from 'react';
import Book from '../Book/Book';
import './BookList.css';
import BookInfo from '../BookInfo/BookInfo';

function BookList(props){

    const [BookInfoVisivel, setBookInfoVisivel] = useState();
    const [BookIdToShow,    setBookIdToShow]    = useState();
    const [BookObjToShow,   setBookObjToShow]   = useState();

    //Função responsavel por abrir o livro na BookInfo
    const openBook = (bookId, bookObj) => {
        setBookInfoVisivel(true);
        setBookIdToShow(bookId);
        setBookObjToShow(bookObj);
    };

    //Funcoes responsavel por fechar a BookInfo
    const closeBook = () =>{
        setBookInfoVisivel(false);
    };

    return (
        <div>
            <BookInfo isVisivel={BookInfoVisivel}
                      bookId={BookIdToShow}
                      Book={BookObjToShow}
                      closeBook={closeBook}
            />

            <div className="BookList">
                <Book id='livro1'
                    nome="Como programar" 
                    autor="William Jardim"
                    descricaoBreve="Se torne um programador rapidinho"
                    descricaoLonga="Aprenda a como programar em JavaScript da sua casa!. Voce vai aprender os passos necessarios para voar como programador!"
                    paginas='20'
                    genero='artigo'
                    assunto='tecnologia'
                    ano='2023'
                    capa="https://via.placeholder.com/150"
                    openBook={ openBook }
                />

                <Book id='livro2'
                    nome="A arte do código" 
                    autor="William"
                    descricaoBreve="Se torne um programador rapidinho"
                    descricaoLonga="Aprenda a como programar em JavaScript da sua casa!. Voce vai aprender os passos necessarios para voar como programador!"
                    paginas='20'
                    genero='artigo'
                    assunto='tecnologia'
                    ano='2000'
                    capa="https://via.placeholder.com/150"
                    openBook={ openBook }
                />
            </div>
            
        </div>
    )
}

export default BookList;