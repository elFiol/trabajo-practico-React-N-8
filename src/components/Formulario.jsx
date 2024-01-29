import { Form } from "react-bootstrap";

const Formulario = () => {
    return (
        <div className="text-light my-5 formulario py-4">
            <h2 className="text-center">Formulario</h2>
            <Form className="mx-5">
                <Form.Group className="my-3">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" minLength={2} maxLength={45} required placeholder="Ej:Juan"></Form.Control>
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control type="text" minLength={2} maxLength={45} required placeholder="Ej:Perez"></Form.Control>
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label>DNI:</Form.Label>
                    <Form.Control type="number" min={11111111} max={99999999} required placeholder="Ej:49614369"></Form.Control>
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" required placeholder="Ej:Perez@gmail.com"></Form.Control>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Formulario;