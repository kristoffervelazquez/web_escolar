import React from 'react';
import ShowSequence from '../../shared/components/ShowSequence';
const link = "https://www.ues.mx/archivos/secuencias/022_14_COM11A2.pdf";
const SequenceScreen = () =>{
    return(

        <>
           <ShowSequence url={link} />
        </>
    );
}

export default SequenceScreen