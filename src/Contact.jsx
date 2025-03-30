import { useState } from "react";

function Contact() {
    

    return (
        <section id="contact" className="container py-5">
            <h2 className="text-center text-white mb-4">Contact Me</h2>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="transparent-card shadow-lg p-4">
                        <div className="card-body">
                            

                            <div className="text-center">
                            <a href="mailto:nbweboldal@gmail.com" className="mt-auto btn btn-primarya">Email me</a>
                            </div>

                               
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
