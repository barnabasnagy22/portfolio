import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/php/mail.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
            setStatusMessage("Your message has been sent successfully! ✅");
            setFormData({ name: "", phone: "", email: "", message: "" });
        } else {
            setStatusMessage("Something went wrong. Please try again. ❌");
        }
    };

    return (
        <section id="contact" className="container py-5">
            <h2 className="text-center text-white mb-4">Contact Me</h2>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="transparent-card shadow-lg p-4">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        className="form-control transparent-input"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        className="form-control transparent-input"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        className="form-control transparent-input"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea 
                                        name="message"
                                        className="form-control transparent-input"
                                        rows="4"
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required 
                                    ></textarea>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                                </div>

                                {statusMessage && (
                                    <div className="text-center mt-3">
                                        <p className="alert alert-info">{statusMessage}</p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
