import { Products } from './components/Product/Product';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';


function App() {

  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Products />}/>
      </Routes>

    </Router>
    

    </>
  )

}

export default App;
