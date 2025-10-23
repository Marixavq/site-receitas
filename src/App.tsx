import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Categorias from './pages/Categorias/Categorias'
import FormReceitas from './pages/FormReceitas/FormReceitas'
import Login from './pages/Login/Login'
import Receita from './pages/Receita/Receita'


function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />   {/* rotas filhas do layout */}
            <Route path="categorias" element={<Categorias />} />
            <Route path="categorias/:nomeCategoria" element={<Categorias />} />
            <Route path="formreceitas" element={<FormReceitas />} />
            <Route path="login" element={<Login />} />
            <Route path="/receita/:link" element={ <Receita /> } />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
