import Header from "./components/Header";
import Cards from "./components/Cards";
import AddBook from "./components/AddBook";
import {Route, Routes} from 'react-router-dom'
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App relative">
      <header className="App-header">
        <Header/>
        <Routes>
          <Route path="/" element={<Cards/>}/>
          <Route path="/addbook" element={<AddBook/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
