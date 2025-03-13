import Background from "./Background.jsx";
import Typewriter from "./components/Typewriter";
import "./typewriter.css";

function Home() {
    return (
        <>

            <div className="container d-flex justify-content-center align-items-center vh-100" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center">
                    <Typewriter text="Hi, I'm Barnabas Nagy" speed={100} />
                    <p className="fs-4 text-white mt-3">I am a front-end developer. This page is built with React.</p>
                    <a href="#projects" className="btn btn-outline-light mt-4">Check My Work</a>
                </div>
            </div>


            <Background 
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
        </>
    );
}

export default Home;
