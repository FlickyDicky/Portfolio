import Nav from "../components/nav.jsx";
import Terminal from "../components/linux-terminal.jsx";
import Me from "../components/me.jsx";
import Stack from "../components/stack";

export default function Hero() {
    return (
        <section id="hero">
                <Nav />
            <div>
                <Terminal />
                <Me />
            </div>
            <Stack />
        </section>
    );
}
