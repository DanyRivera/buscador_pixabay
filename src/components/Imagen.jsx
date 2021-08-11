import React from 'react';
import styled from './styles.module.css'

const Imagen = ({imagen}) => {
    
    //Extraer datos de imagen
    const {likes, views, previewURL, largeImageURL, tags} = imagen;

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className={`card ${styled.ajuste}`}>
                <img src={previewURL} alt={tags} className="card-img-top" />

                <div className="card-body ">
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Vistas</p>
                </div>

                <div className="card-footer">
                    <a 
                        href={largeImageURL} 
                        className="btn btn-primary btn-block"
                        target='_blank'
                        rel='noopener noreferrer' 
                    >Ver Imagen</a>
                </div>

            </div>
        </div>
    );
}
 
export default Imagen;
