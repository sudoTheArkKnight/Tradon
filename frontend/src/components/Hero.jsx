import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HeroSection = () => {
    return (
        <div className="h-100">
            <section className="h-100 bgImg">
                <div className="d-flex align-items-center justify-content-around  h-100">
                    <div>
                        <h1 className="text-center mb-4 text-white">TRADEON</h1>
                    </div>
                    <div className="d-flex flex-column gap-5 text-white welcome-div">
                        <h1 className="mb-10 text-4xl">Welcome!</h1>
                        <LinkContainer to="/login">
                            <Button variant="primary" className="w-80">
                                Login
                            </Button>
                        </LinkContainer>
                        <LinkContainer to="/register">
                            <Button variant="primary" className="w-80">
                                Sign up
                            </Button>
                        </LinkContainer>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
