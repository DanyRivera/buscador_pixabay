import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Imagenes from './components/Imagenes';

function App() {

  //Satate de la app
  const [busqueda, setBusqueda] = useState('');
  //State de las imagenes
  const [imagenes, setImagenes] = useState([]);
  //States para paginador
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {

    if (busqueda === '') return;

    const consultaApi = async () => {

      const imagenesPorPagina = 30;
      const key = '21425638-72bbfbdfbf1aab1250ab22d18';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      const respuesta = await fetch(url);
      const imagenes = await respuesta.json();

      setImagenes(imagenes.hits)

      //Calcular el total de paginas
      const calcularPaginas = Math.ceil(imagenes.totalHits / imagenesPorPagina);
      setTotalPaginas(calcularPaginas);

      //Mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({
        behavior: 'smooth'
      })

    }

    consultaApi();

  }, [busqueda, paginaActual])

  //DEfinir la pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;

    if (nuevaPaginaActual === 0) return;

    setPaginaActual(nuevaPaginaActual)
  }

  //DEfinir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if (nuevaPaginaActual > totalPaginas) return;

    setPaginaActual(nuevaPaginaActual);

  }

  return (
    <div className="container">
      <div className="jumbotron">

        <p className="lead text-center">Buscador de Imagenes</p>

        <Formulario
          setBusqueda={setBusqueda}
        />

      </div>

      <div className="row justify-content-center">
        <Imagenes
          imagenes={imagenes}
        />

        { (paginaActual === 1) ? null :

          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaAnterior}
          >&laquo; Anterior</button>

        }

        { (paginaActual === totalPaginas) ? null :

          <button
            type="button"
            className="btn btn-info"
            onClick={paginaSiguiente}
          >Siguiente &raquo;</button>

        }


      </div>

    </div>
  );
}

export default App;
