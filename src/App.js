import logo from './logo.svg';
import './App.css';

//Importando os componentes
import Headbar from './components/Headbar/Headbar';
import BookList from './components/BookList/BookList';
import Footbar from './components/Footbar/Footbar';

function App() {
 
  return (
    <div className="App">

        <Headbar />
        <BookList/>
        <Footbar />
      
    </div>
  );
}

export default App;
