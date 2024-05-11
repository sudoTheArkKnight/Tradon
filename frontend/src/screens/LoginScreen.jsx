import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate("/sharesScreen");
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { res } = await login({ email, password }).unwrap();
            dispatch(setCredentials({ email, password }));
            navigate("/sharesScreen");
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };
    console.log(userInfo);
    return (
        <section className="bgImg loginSection">
            <div className="ld1">
                <div className="bgSecondary ld2">
                    <h1>Sign In</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="my-2" controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="my-2" controlId="password">
                            <Form.Label>password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        {isLoading && <Loader />}
                        <Button
                            type="submit"
                            variant="primary"
                            className="mt-3 button"
                        >
                            Sign In
                        </Button>
                        <Row className="py-3">
                            <Col>
                                New Customer?{" "}
                                <Link to="/register">Register</Link>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default LoginScreen;
