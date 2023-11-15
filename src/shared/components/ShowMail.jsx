import React from 'react';
import './css/mailscreen.css';

function ShowMail (){    
    return(
        
        <form action="" className="mail-container">

        <input type="text" className="input-info" placeholder="Para: "/>
        <input type="text" className="input-info" placeholder="Asunto "/>       
        
            <section className="text-icons">
                <i className="fi fi-br-bold"></i>
                <i className="fi fi-br-italic"></i>
                <i className="fi fi-br-underline"></i>
                <i className="fi fi-br-interlining"></i>
                <i className="fi fi-br-picture"></i>
                <i className="fi fi-br-link-alt"></i>    
                <i className="fi fi-rr-paperclip-vertical"></i>
            </section>          
            <textarea name="message" id="" cols="30" rows="10" className="message"> </textarea>                             

            <br/>        
                     
<table className="">
    <tr>
        <td> <button className="cancel">Cancelar</button> </td>      
        <td> <button className="send">Enviar</button></td>  
    </tr>    
  </table>

    </form>                        

    );
}

export default ShowMail