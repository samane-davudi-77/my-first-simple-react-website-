import { Button } from 'react-bootstrap'
import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import '../login/Signup.css'


const Signup = () => {

    return (
        <div className="mySignup">
            <div className="myform">
                <Form className="myformstyle rtl">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ایمیل</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>رمز عبور</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                   
                    <Form.Group className="mb-3 mr-5" controlId="formBasicCheckbox">
                        <Form.Check className="mr-5" type="checkbox" label="موافق با قوانین" />
                    </Form.Group>
                    <div className="mybutton">
                        <Button variant="primary" type="submit" className="w-50">
                            ورود
                        </Button>
                    </div>
                </Form>

            </div>
        </div>
    );
}

export default Signup;