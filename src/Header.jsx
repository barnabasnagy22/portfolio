import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="container-fluid py-3">
            <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold fs-4 text-white">Barnabas Nagy</span>

                <div className="d-flex gap-4 align-items-center">

                    <a id="nava" className="text-white text-decoration-none fs-5" href="#">Home</a>
                    <a id="nava" className="text-white text-decoration-none fs-5" href="#projects">Projects</a>
                    <a id="nava" className="text-white text-decoration-none fs-5" href="#contact">Contact</a>

                    

                </div>
            </div>
        </nav>
    );
}

export default Header;
