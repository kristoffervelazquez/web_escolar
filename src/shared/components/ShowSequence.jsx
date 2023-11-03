import React from 'react';
import './css/pdf.css';

function ShowSequence (props){
    const {url} = props;
    return(

        <div className='pdf-element'>
           <embed src={url} />
        </div>
    );
}
/*https://www.ues.mx/archivos/secuencias/022_14_COM11A2.pdf
*/

export default ShowSequence