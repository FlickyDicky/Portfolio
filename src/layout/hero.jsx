import Nav from "../components/nav.jsx";
import Terminal from "../components/linux-terminal.jsx";
import Me from "../components/me.jsx";
import Title from "../components/title.jsx";

export default function Hero() {
    return (
        <section id="hero">
            <Nav />
            <div>
                <Terminal />
                <Me />
            </div>
            <Title titleName={"Stack"} subtitle={"HTML | CSS | JavaScript | PHP | Python | Laravel | MySQL | Git | Linux(OS) | React"} />
        </section>
    );
}
