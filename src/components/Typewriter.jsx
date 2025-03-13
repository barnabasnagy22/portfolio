import { useState, useEffect } from "react";

function Typewriter({ text, speed = 100 }) {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);

    return <h1 className="typewriter-text">{displayText}</h1>;
}

export default Typewriter;
