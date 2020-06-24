import React from 'react';
import './Login.scss'
import logo from '../../assiste-vida.png'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default (props) => {
    return (
        <React.Fragment>
            <div className="login">
                <div className="login__logo">
                    <span className="login__logo-span">
                        <img src={logo} alt="Assiste vida" className="login_logo--img"/>
                    </span>
                </div>
                <div className="login__form">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail:</Form.Label>
                            <Form.Control
                                size="lg"
                                className="square-field"
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control
                                size="lg"
                                className="square-field"
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Button
                            size="lg"
                            variant="primary button__assist_default"
                            type="button"
                            block
                        >
                            Entrar
                        </Button>
                    </Form>
                </div>
            </div>;
        </React.Fragment>
    );

}
