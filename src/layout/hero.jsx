import Nav from "../components/nav.jsx";
import Terminal from "../components/linux-terminal.jsx";
import Me from "../components/me.jsx";
export default function Hero() {
    return (
        <section id="about" className="hero">
                <Nav />
            <div>
                <Terminal />
                <Me />
            </div>
        </section>
    );
}
