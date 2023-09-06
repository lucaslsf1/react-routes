import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './paginas/Inicio/index'
import SobreMim from './paginas/SobreMim/index'
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";
import PaginaPadrao from "./components/PaginaPadrao";

function AppRoutes() {

  return (
    <BrowserRouter> 

      <Menu />

      {/* Rotas aninhadas */}

      {/* 
        Na rota "/", a estrutura a ser renderizada é: 
        
        <PaginaPadrao>
          <Inicio />
        </PaginaPadrao>

        Na rota "/sobremim", a estrutura a ser renderizada é:
        
        <PaginaPadrao>
          <SobreMim />
        </PaginaPadrao>
      */}


      <Routes> 
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="*" element={<div>Error 404. Página não encontrada.</div>} />
      </Routes>

      <Rodape />
      
    </BrowserRouter>
  )

}

export default AppRoutes;
