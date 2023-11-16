import React from 'react';
import './css/mailscreen.css';
import { useState, } from 'react';

function ShowMail() {

    const [form, setForm] = useState({
        to: '',
        subject: '',
        message: ''
    });
    
    return (

        <form action="" className="mail-container">

            <input type="text" id="recipient" className="input-info" placeholder="Para: " value={form.to} onChange={e => {setForm({...form, to: e.target.value})}} />
            <input type="text" id="subject" className="input-info" placeholder="Asunto: " value={form.subject} onChange={e => {setForm({...form, subject: e.target.value})}} />

            <section className="text-icons">
                <i className="fi fi-br-bold" />
                <i className="fi fi-br-italic" />
                <i className="fi fi-br-underline" />
                <i className="fi fi-br-interlining" />
                <i className="fi fi-br-picture" />
                <i className="fi fi-br-link-alt" />
                <i className="fi fi-rr-paperclip-vertical" />
            </section>
            <textarea name="message" id="textarea1" cols="30" rows="10" className="message" value={form.message} onChange={e => {setForm({...form, message: e.target.value})}}/>

            <br />

            <table className="">
                <tbody>
                    <tr>
                        <td> <button className="cancel">Cancelar</button> </td>
                        <td> <button className="send" onClick={() => {"Para: "+alert(form.to+"\nAsunto: "+form.subject+"\nMensaje: "+form.message)}}>Enviar</button></td>
                    </tr>
                </tbody>
            </table>

        </form>

    );


}

export default ShowMail