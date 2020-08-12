import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import {getGifs} from '../helpers/getGifs';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

   // const [images, setImages] = useState([]);

    //useEffect( () => {
    //    getGifs(category)
   //     .then(setImages);
   // }, [category]);


   //LLAMADO HOOK
    const {data: images, loading} = useFetchGifs(category);
  
    return(
        <>
            <h3>{category}</h3>

            {loading ? 'Cargando' : 'Datos cargados exitosamente'}

            <div className="card-grid">
            {   
                // images.map(image => <img src={image.url} />)  
                images.map(image => 
                    <GifGridItem
                        key= {image.id}
                        {...image}
                    />
                )  
             }   
             </div> 
        </>
        

    )
}

GifGrid.protoTypes = {
    category: PropTypes.string.isRequired
}