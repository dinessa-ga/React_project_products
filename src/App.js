import { Products } from './components/Product/Product';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { ProductDetail } from './components/ProductDetail/ProductDetail';


function App() {

  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Products />}/>
        <Route path ='/product/:id' element={<ProductDetail/>}/>
      </Routes>

    </Router>
    

    </>
  )

}

export default App;
