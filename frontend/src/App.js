import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../src/components/Login/Login"
import Register from './components/Register/Register'
import Header from "./components/Header"
import Desc from "./components/Books/Description"
function App() {
  return (
    
    <BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path="/register" element={<Register/>} />
  <Route path='/Header' element={<Header/>}/>
  <Route path='Description' element={<Desc/>}/>
</Routes>

    </BrowserRouter>
  );
}

export default App;
