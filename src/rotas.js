import React from 'react';

import ListagemGeneros from './views/listagem-generos';

import CadastroGenero from './views/cadastro-genero';


import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cadastro-genero/:idParam?' element={<CadastroGenero />} />

        <Route path='/listagem-generos' element={<ListagemGeneros />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;