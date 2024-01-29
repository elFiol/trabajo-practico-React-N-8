import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [DNI, setDNI] = useState("")
    const [email, setEmail] = useState("")

    const minYmax = (elemento, min, max) => {
        const texto = elemento.trim();
        if (texto.length >= min && texto.length <= max) {
            console.log(texto.length);
            console.log(true)
            return true;
        } else {
            console.log(texto.length);
            console.log(false)
            return false;
        }
    };

    const validarEmail = (emailProp) => {
        console.log(emailProp)
        const value = emailProp
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };


    const handlerForm = (e) => {
        e.preventDefault()
        if (minYmax(nombre, 2, 45) && minYmax(apellido, 2, 45) && minYmax(DNI, 8, 8)) {
            console.log("hola mundo")
        } else {
            console.log("NOOOOOOOOO")
        }
    }
    return (
        <div className="text-light my-5 formulario py-4">
            <h2 className="text-center">Formulario</h2>
            <Form className="mx-5" onSubmit={handlerForm}>
                <Form.Group className="my-3">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" minLength={2} maxLength={45} required placeholder="Ej:Juan" onChange={(e) => setNombre(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control type="text" minLength={2} maxLength={45} required placeholder="Ej:Perez" onChange={(e) => setApellido(e.target.value)}></Form.Control>
                </Form.Group><Form.Group className="my-3">
                    <Form.Label>DNI:</Form.Label>
                    <Form.Control type="text" minLength={8} maxLength={8} required placeholder="Ej:49614369" onChange={(e) => setDNI(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" required placeholder="Ej:Perez@gmail.com" onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mt-5 d-flex justify-content-end">
                    <Button variant="light" type="submit">Enviar</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Formulario;