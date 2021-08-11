import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({setBusqueda}) => {

    const [termino, setTermino] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        //Validando
        if(termino.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        //Enviar el termino de busqueda al componente principal(App.js)
        setBusqueda(termino)

    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text" 
                        className="form-control form-control-lg"
                        placeholder="Busco una imagen, ejemplo: futbol, café, etc."
                        onChange={ e => setTermino(e.target.value) }
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>

            { error ? <Error mensaje="Agrega un termino de busqueda"/> : null }

        </form>
     );
}
 
export default Formulario;
