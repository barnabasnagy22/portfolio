import "./stack.css";

function Stack() {
    const technologies = [
        { name: "JavaScript", src: "/images/stack/javascript.svg" },
        { name: "React", src: "/images/stack/react.svg" },
        { name: "CSS3", src: "/images/stack/css3.svg" },
        { name: "HTML5", src: "/images/stack/html5.svg" },
        { name: "Bootstrap", src: "/images/stack/boot.svg" },
        { name: "MySQL", src: "/images/stack/mysql.svg" },
        { name: "GitHub", src: "/images/stack/github.svg" },
        { name: "VS Code", src: "/images/stack/vscode.svg" }
    ];

    return (
        <section className="stack-section">
            <h2 className="text-center text-white mb-4">Here are a few technologies I've been working with:</h2>
            <div className="stack-grid">
                {technologies.map((tech, index) => (
                    <div key={index} className="stack-item">
                        <img src={tech.src} alt={tech.name} className="stack-icon" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stack;
